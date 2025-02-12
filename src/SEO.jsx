import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>AOD AVOCATS SCP : Cabinet d`avocats - Expertise juridique et services personnalisés</title>
      <meta
        name="description"
        content="Notre cabinet d'avocats offre des services juridiques d'excellence grâce à une équipe d'avocats expérimentés."
      />
      <meta
        property="og:image"
        content="/img/logonavig.png"
      />
      <meta property="og:image:alt" content="Logo de AOD AVOCATS SCP" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="logo" href="/img/logonavig.png" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://aod-avocats.net",
            "logo": "/img/logonavig.png",
            "name": "AOD AVOCATS SCPA",
            "description": "Cabinet d'avocats spécialisé en droit des affaires, droit civil et droit de la famille."
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;