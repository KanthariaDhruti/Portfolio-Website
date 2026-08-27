#!/bin/bash
# Generates the WebP files the site actually serves.
#
#   photo.png  ->  photo-800.webp   (mobile / grid tiles)
#              ->  photo-1600.webp  (desktop / hero)
#
# Logos and icon marks get a single full-size .webp instead, since they are
# already small and are never rendered above a few hundred pixels.
#
# The worklist is every image referenced from src/ and index.html, whether the
# reference points at the original (.png/.jpg, rewritten at runtime by
# <SmartImage>) or straight at a derivative (.webp, used for logos and icons).
#
# Requires cwebp:  brew install webp
# Run from anywhere after adding or replacing an image in public/.
set -e
cd "$(dirname "$0")/.."

# Referenced originals, plus the source original behind every referenced .webp.
{
  grep -rhoE '"/[A-Za-z0-9._%/-]+\.(png|jpg|jpeg)"' src index.html | tr -d '"'
  grep -rhoE '"/[A-Za-z0-9._%/-]+\.webp"' src index.html | tr -d '"' \
    | sed -E 's/-(800|1600)\.webp$//; s/\.webp$//' \
    | while read -r stem; do
        for ext in png jpg jpeg; do
          [ -f "public${stem}.${ext}" ] && echo "${stem}.${ext}" && break
        done
      done
} | sort -u | while read -r p; do
  rel="public${p}"
  [ -f "$rel" ] || { echo "skip (missing): $p"; continue; }
  base="${rel%.*}"
  w=$(sips -g pixelWidth "$rel" 2>/dev/null | awk '/pixelWidth/{print $2}')
  case "$(basename "$rel")" in
    logo-*|icon-*|monogram-*|whisk-and-crumb-logo.png)
      cwebp -quiet -q 90 "$rel" -o "${base}.webp"
      ;;
    *)
      if [ "$w" -gt 1600 ]; then
        cwebp -quiet -q 80 -resize 1600 0 "$rel" -o "${base}-1600.webp"
      else
        cwebp -quiet -q 80 "$rel" -o "${base}-1600.webp"
      fi
      if [ "$w" -gt 800 ]; then
        cwebp -quiet -q 80 -resize 800 0 "$rel" -o "${base}-800.webp"
      else
        cp "${base}-1600.webp" "${base}-800.webp"
      fi
      ;;
  esac
done
echo "images optimized"
