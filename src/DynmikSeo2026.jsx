// src/DynmikSeo2026.jsx
import React, { useMemo } from "react";
import { Helmet } from "react-helmet";

function SEO({
  title,
  description,
  keywords,

  // Options SEO avancées (facultatives)
  canonicalUrl,
  ogImage,
  ogType = "website",
  ogLocale = "fr_FR",
  siteName = "AOD AVOCATS",
  twitterSite,
  noIndex = false,
  schema, // objet JSON-LD (ou tableau d'objets)
}) {
  const resolvedUrl = useMemo(() => {
    if (canonicalUrl) return canonicalUrl;
    if (typeof window !== "undefined") return window.location.href;
    return undefined;
  }, [canonicalUrl]);

  const robotsContent = useMemo(() => {
    if (noIndex) return "noindex, nofollow";
    // Bon standard “safe” SEO
    return "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  }, [noIndex]);

  const schemaString = useMemo(() => {
    if (!schema) return null;
    try {
      return JSON.stringify(schema);
    } catch {
      return null;
    }
  }, [schema]);

  return (
    <Helmet>
      {/* Base */}
      <meta charSet="utf-8" />
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      {/* Robots */}
      <meta name="robots" content={robotsContent} />

      {/* Canonical */}
      {resolvedUrl ? <link rel="canonical" href={resolvedUrl} /> : null}

      {/* Open Graph */}
      {title ? <meta property="og:title" content={title} /> : null}
      {siteName ? <meta property="og:site_name" content={siteName} /> : null}
      {ogLocale ? <meta property="og:locale" content={ogLocale} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {resolvedUrl ? <meta property="og:url" content={resolvedUrl} /> : null}
      {ogType ? <meta property="og:type" content={ogType} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={ogImage ? "summary_large_image" : "summary"}
      />
      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      {/* JSON-LD */}
      {schemaString ? (
        <script type="application/ld+json">{schemaString}</script>
      ) : null}
    </Helmet>
  );
}

export default SEO;
