
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Remplace 350vh pour améliorer la visibilité */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0488b2, #0f172a, #000);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden; /* Empêche les débordements */
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #0f172a;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Réduction de la taille du titre sur les petits écrans */
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 25px;
  max-width: 900px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px; /* Espacement interne ajusté */
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Une seule colonne sur petits écrans */
    gap: 20px; /* Espacement réduit sur petits écrans */
  }
`;

const Card = styled.div`
  background: rgba(10, 34, 64, 1.9);
  border-radius: 1px;
  padding: px; /* Amélioration de l'espacement interne */
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  box-shadow: -2px -2px 1px rgba(0, 0, 0, 0.8);
  transition: transform 0.5s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px; /* Réduction de l'espacement interne sur petits écrans */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: px;
  margin-bottom: 1px; /* Ajout d'un espacement entre l'image et le texte */

  @media (max-width: 768px) {
    height: 150px; /* Réduction de la taille de l'image sur petits écrans */
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const EnhancedComponent = () => {
  return (
    <Container>
      {/* Titre principal */}
      <Title>Bienvenue à Notre Service</Title>
      {/* Description principale */}
      <Description>
        Notre objectif est de résoudre les problèmes juridiques de nos clients
        de manière efficace et efficiente, tout en leur fournissant un service
        de qualité supérieure. Nous sommes fiers de notre engagement envers
        l’excellence et notre détermination à protéger les intérêts de nos
        clients.{" "}
      </Description>

      {/* Grille de conteneurs */}
      <Grid>
        <Card>
          <CardImage src="/img/Maitre4.jpg" alt="Service 1" />
          <CardTitle>DROIT DES CONTRATS</CardTitle>
          <CardDescription>
            Dans l’élaboration et la rédaction, il ne faut pas perdre de vue
            deux choses essentielles. Mettre sur papier les demandes d’une
            manière précise, et prévoir lors de chaque stipulation ou même d’une
            phrase l’exacte interprétation possible et les situations de
            conflits qui peuvent en résulter afin de parfaire sa rédaction et
            prévoir des possibilités de règlement de tout litige éventuel. Le
            rôle du Cabinet se trouve dans la rigueur de rédaction pour
            tranquiliser son client.
          </CardDescription>
        </Card>

        <Card>
          <CardImage src="/img/affaire.jpg" alt="Service 2" />
          <CardTitle>DROIT PENAL</CardTitle>
          <CardDescription>
            Le cabinet peut vous assister et vous représenter devant les
            juridictions pénales en toute matières pénales concernant les délits
            et les crimes. A ce titre, il dispose d’avocats spécialisés en droit
            pénal et en droit pénal des affaires, qui dominent ce domaine et qui
            s’investissent totalement en se rapprochant du client dont ils ont
            en charge le dossier, en le visitant, en l’écoutant, et en prenant à
            bras le corps sa défense en y mettant toute la force et l’énergie
            nécessaires.
          </CardDescription>
        </Card>

        <Card>
          <CardImage src="/img/maitre7.jpg" alt="Service 3" />
          <CardTitle>DROIT DES AFFAIRES</CardTitle>
          <CardDescription>
            Au sein de notre cabinet, nous comprenons que le droit des affaires
            ne se résume pas simplement à la rédaction de contrats ou à la
            résolution de litiges. Il s`agit d`un levier essentiel pour la
            réussite de votre entreprise. Notre rôle est de mettre notre
            expertise juridique au service de votre savoir-faire pour vous
            fournir des solutions pratiques et stratégiques. Que vous cherchiez
            à nouer de nouveaux partenariats, à élaborer des projets ambitieux
            ou à sécuriser vos contrats, nous vous accompagnons à chaque étape
            avec des conseils éclairés et personnalisés. Notre objectif est de
            vous offrir une sécurité juridique optimale, tout en vous permettant
            de vous concentrer sur la croissance de votre activité.
          </CardDescription>
        </Card>
        <Card>
          <CardImage src="/img/travail.png" alt="Service 4" />
          <CardTitle>DROIT DE TRAVAIL</CardTitle>
          <CardDescription>
            Le droit du travail est un domaine complexe et en constante
            évolution. Mon objectif est de vous offrir des conseils clairs,
            adaptés à votre situation, pour sécuriser vos démarches et préserver
            vos intérêts, quelle que soit votre position. Pour les Employeurs :
            Je vous aide à prévenir les litiges en mettant en place des
            pratiques conformes à la loi. En cas de conflit, je vous représente
            avec détermination. Pour les Salariés : Je suis votre défenseur face
            à des situations de licenciement abusif, de harcèlement ou
            d’injustice, pour faire valoir vos droits. Dans le monde du travail,
            chaque droit compte. Je suis là pour m’assurer qu’ils soient
            respectés
          </CardDescription>
        </Card>
        <Card>
          <CardImage src="/img/fiscal.png" alt="Service 5" />
          <CardTitle>DROIT FISCAL</CardTitle>
          <CardDescription>
            Le Code Général des Impôts évolue sans cesse avec de nouvelles
            dispositions. Il concerne tout particulier et toute entreprise, et
            il faut être au fait de ces différents changements pour conseiller
            et assister tout contribuable pour tout ce qui concerne le côté
            imposable en cas de cession d’un bien immeuble ou d’un fonds de
            commerce, en cas de redressement fiscal, ou d’une imposition que le
            contribuable ne trouve pas légitime, en cas de besoin d’un quitus
            fiscal pour les expatriés, ou autres, … Le cabinet peut vous
            conseiller efficacement, vous assister auprès de la Direction des
            Impôts directs et indirects, en clair, vous faciliter la tâche, en
            vous trouvant des solutions rapides et appropriées.
          </CardDescription>
        </Card>

        <Card>
          <CardImage src="/img/mine.png" alt="Service 6" />
          <CardTitle>DROIT MINIER ET ENVIRONNEMENTALE</CardTitle>
          <CardDescription>
            En matière de droit minier, nous intervenons pour : Assister les
            entreprises minières dans l`obtention des permis et autorisations
            nécessaires pour l`exploration et l`exploitation des ressources
            naturelles. Rédiger et négocier des contrats miniers, en
            garantissant leur conformité avec les lois nationales et
            internationales. Conseiller sur les obligations réglementaires,
            notamment en matière de fiscalité minière et de partage des
            bénéfices. Du côté environnemental, notre rôle est d`assurer : La
            conformité avec les lois environnementales. La gestion des litiges
            environnementaux. Nous sommes là pour vous guider.
          </CardDescription>
        </Card>
        <Card>
          <CardImage src="/img/securitesocial.png" alt="Service 7" />
          <CardTitle>DROIT SOCIALE ET SECURITE SOCIALE</CardTitle>
          <CardDescription>
            Le droit social et la sécurité sociale ne sont pas de simples
            concepts juridiques. Ils incarnent la justice et l`équité dans le
            monde du travail. Ils assurent un équilibre entre les intérêts des
            employeurs et des travailleurs, tout en protégeant les plus
            vulnérables de notre société. En tant qu’avocat, je m’efforce de
            défendre ces principes, que ce soit en conseillant mes clients, en
            négociant pour eux ou en plaidant en leur nom devant les
            juridictions compétentes. Ces branches du droit, dynamiques et en
            constante évolution, reflètent notre engagement collectif pour une
            société où chacun a droit à la dignité et à la sécurité. Notre
            mission est de garantir que ces droits soient respectés et appliqués
            avec rigueur et humanité.
          </CardDescription>
        </Card>
        <Card>
          <CardImage src="/img/familled.png" alt="Service 8" />
          <CardTitle>DROIT DE LA FAMILLE</CardTitle>
          <CardDescription>
            Le droit de la famille n’est pas qu’une affaire de lois et de
            règlements. Il est avant tout une question d’humanité.Mon objectif
            est de vous accompagner avec respect et bienveillance, en trouvant
            des solutions justes et équitables qui respectent vos droits et vos
            valeurs. Parce que chaque famille est unique, chaque solution doit
            l’être aussi. Chaque décision prise dans ce domaine peut avoir des
            conséquences profondes sur les relations et le bien-être des
            personnes impliquées, en particulier des enfants. En tant qu’avocat,
            je suis là pour : Écouter vos besoins avec empathie. Trouver des
            solutions adaptées à votre situation personnelle. Défendre vos
            intérêts tout en cherchant à préserver l’harmonie familiale lorsque
            cela est possible.
          </CardDescription>
        </Card>
      </Grid>
    </Container>
  );
};

export default EnhancedComponent;
