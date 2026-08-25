/**
 * Renders the optimized WebP derivatives that scripts/optimize-images.sh
 * generates next to every local image: "/team.png" becomes "/team-800.webp"
 * and "/team-1600.webp", picked per viewport via srcset.
 * Remote URLs and anything without a derivative are rendered untouched.
 */
const LOCAL_RASTER = /^\/[^?#]+\.(png|jpe?g)$/i;

const SmartImage = ({ src, sizes = "100vw", ...props }) => {
  if (!src || !LOCAL_RASTER.test(src)) {
    return <img src={src} {...props} />;
  }

  const base = src.replace(/\.(png|jpe?g)$/i, "");

  return (
    <img
      src={`${base}-1600.webp`}
      srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`}
      sizes={sizes}
      {...props}
    />
  );
};

export default SmartImage;
