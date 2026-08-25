import React, { useEffect } from "react";

/**
 * Reusable SEO component for managing dynamic meta tags, title, canonical links, and Open Graph tags.
 */
export default function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = "Dhruti Kantharia | Graphic Designer & Web Developer";
  const defaultDescription =
    "Portfolio of Dhruti Kantharia, Graphic Designer & Web Developer specializing in creative UI/UX, Figma prototyping, editorial design, and modern web applications.";
  const defaultKeywords =
    "Dhruti Kantharia, Graphic Designer, Web Developer, UI/UX Designer, Portfolio, Editorial Design, MERN Stack, Figma, Webflow, Gandhinagar University";
  const siteUrl = "https://kanthariadhruti.github.io";
  const defaultImage = `${siteUrl}/logo-color.png`;

  const metaTitle = title ? `${title} | Dhruti Kantharia` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : defaultImage;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  useEffect(() => {
    // 1. Update Document Title
    document.title = metaTitle;

    // Helper to set or create meta tag
    const setMetaTag = (nameAttr, nameVal, contentVal, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", metaDescription);
    setMetaTag("name", "keywords", metaKeywords);

    // 3. Open Graph Meta Tags
    setMetaTag("property", "og:title", metaTitle, true);
    setMetaTag("property", "og:description", metaDescription, true);
    setMetaTag("property", "og:image", metaImage, true);
    setMetaTag("property", "og:url", pageUrl, true);
    setMetaTag("property", "og:type", "website", true);

    // 4. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", metaTitle);
    setMetaTag("name", "twitter:description", metaDescription);
    setMetaTag("name", "twitter:image", metaImage);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", pageUrl);
  }, [metaTitle, metaDescription, metaKeywords, metaImage, pageUrl]);

  return null;
}
