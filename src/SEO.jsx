import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>
        AOD AVOCATS SCP : Cabinet d`avocats - Expertise juridique et services
        personnalisés
      </title>
      <meta
        name="description"
        content="Notre cabinet d'avocats offre des services juridiques d'excellence grâce à une équipe d'avocats expérimentés."
      />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://aod-avocats.net",
            
            "name": "AOD AVOCATS",
            "description": "Cabinet d'avocats spécialisé en droit des affaires, droit civil , droit des affaires."
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
