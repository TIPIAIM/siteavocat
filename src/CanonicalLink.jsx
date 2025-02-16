//pour les liens canonique
// src/components/CanonicalLink.jsx
import { Helmet } from 'react-helmet-async';

const CanonicalLink = ({ url }) => (
  <Helmet>
    <link rel="canonical" href={url} />
  </Helmet>
);

export default CanonicalLink;