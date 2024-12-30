export default function StructuredData() {
    return (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AOD AVOCATS SCPA",
          url: "https://https://aod-avocats-scpa.vercel.app",
          sameAs: [
            "https://web.facebook.com/people/AOD-Avocats-SCPA/61569855070493/?rdid=nu1hpcE1e9TKytvQ&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15poedCHYP%2F%3F_rdc%3D1%26_rdr",
            "https://www.instagram.com/aod.avocats.scpa/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "00224622253536",
            contactType: "Service Juridique",
          },
        })}
      </script>
    );
  }
  