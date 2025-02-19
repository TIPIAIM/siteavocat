export default function StructuredData() {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Website",
        name: "AOD AVOCATS | Cabinet d'avocat Guinée-Conkry",
        url: "https://aod-avocats.net",

        description:
          " Notre cabinet est spécialisé en droit des affaires, droit civil, droit minier, droit des affaires ...",
        sameAs: [
          "https://web.facebook.com/people/AOD-Avocats-SCPA/61569855070493/?rdid=nu1hpcE1e9TKytvQ&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15poedCHYP%2F%3F_rdc%3D1%26_rdr",
          "https://www.instagram.com/aod.avocats.net/",
        ],
        publisher: {
          "@type": "Organization",
          name: "TIPTMCode.",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+224 622 253 536",
          contactType: "Service Juridique",
        },
      })}
    </script>
  );
}
