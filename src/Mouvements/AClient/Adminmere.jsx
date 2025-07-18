import { useState, lazy } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Sun,
  Moon,
  Menu,
  X,
  Users,
  FileText,
  Receipt,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../Styles/colors"; // Palette maison
import LogoutButton from "../../Communicbck/identification/Deconne";
import feuillevid from "../../assets/Video/feuillevid.mp4";
import { images } from "../../assets/images";
const SocialLinks = lazy(() => import("../Lienlateral/SocialLinks"));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
 //   font-family: "Helvetica Neue", Arial, sans-serif;
    background: ${colors.bgDark};
    color: ${colors.white};
    transition: background 0.3s, color 0.3s;
  }
`;

const Header = styled.header`
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  background: ${colors.overlayAlpha};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  box-shadow: 0 2px 12px ${colors.blueMarine}33;
  padding: 0 2vw;
  backdrop-filter: blur(9px);
  @media (max-width: 650px) {
    justify-content: space-between;
    padding: 0 12px;
  }
`;

const Logo = styled.img`
  height: 44px;
  border-radius: 2px;
  filter: drop-shadow(0 2px 10px #0007);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2vw;
  flex: 1;
  margin-left: 36px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.white};
  font-weight: 600;
  font-size: 1.07rem;
  padding: 10px 20px;
  border-radius: 9px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.16s, color 0.14s, box-shadow 0.17s;
  &:hover,
  &.active {
    background: ${colors.bgDark}33;
    color: ${colors.blueDarkSky};
    box-shadow: 0 3px 1px ${colors.white};
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 2rem;
  cursor: pointer;
  display: none;
  z-index: 1250;
  @media (max-width: 700px) {
    display: block;
  }
`;

const DrawerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0a12c6;
  z-index: 1290;
`;

const DrawerMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 82vw;
  max-width: 350px;
  background: ${colors.bgDark};
  box-shadow: -2px 0 34px #000b;
  display: flex;
  flex-direction: column;
  padding: 42px 24px 22px 22px;
  z-index: 1300;
`;

const DrawerClose = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 1.6em;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: 22px;
  @media (max-width: 700px) {
    gap: 11px;
    margin-left: 0;
  }
`;

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
  z-index: 2;
`;

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
`;

const VideoBg = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.28) blur(2.2px) grayscale(0.08);
  pointer-events: none;
  transition: filter 0.22s;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${colors.bgDark}EE 58%,
    ${colors.bgSecondary}F7 100%
  );
  backdrop-filter: blur(1.5px) saturate(180%);
  z-index: 1;
`;

const Content = styled.section`
  position: relative;
  z-index: 3;
  padding: 1vw 4vw 4vw 4vw;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled(motion.h1)`
  font-size: 2.22rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: ${colors.goldenYellow};
  margin-bottom: 0.8em;
  text-shadow: 0 8px 34px #000c, 0 1px 0 #000;
  @media (max-width: 650px) {
    font-size: 1.13rem;
    margin-bottom: 0.56em;
  }
`;

const CardRow = styled.div`
  width: 100%;
  display: flex;
  gap: 2vw;
  overflow-x: auto;
  padding-bottom: 0.5em;
  margin-bottom: 2em;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
    background: ${colors.bgSecondary}33;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.goldenYellow}99;
    border-radius: 8px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: -40px;
    align-items: center;
    margin-top: 20px;
    /* Pour la superposition sur mobile, voir plus bas */
  }
`;

const FeatureCard = styled(motion.div)`
  min-width: 270px;
  max-width: 320px;
  width: 100%;
  background: ${colors.cardHover}CC;
  color: ${colors.white};
  border-radius: 22px;
  box-shadow: 0 5px 38px #0008, 0 1.5px 7px ${colors.accent}26;
  padding: 2.1em 1.4em 1.3em 1.4em;
  margin: 0 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  transition: transform 0.16s, box-shadow 0.16s, background 0.13s;
  cursor: pointer;
  backdrop-filter: blur(1.5px);
  &:hover {
    transform: scale(1.04) translateY(-7px);
    box-shadow: 0 10px 38px ${colors.goldenYellow}40, 0 5px 38px #000a;
    background: ${colors.bgSecondary}F7;
  }

  @media (max-width: 700px) {
    min-width: 80vw;
    max-width: 410px;
    margin: 0;
    left: 0;
    right: 0;
    /* Effet superposition décalée façon pile */
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(${({ $index }) => $index * 48}px)
      scale(${({ $index }) => 1 - 0.03 * $index});
    z-index: ${({ $z }) => 200 - $z};
    box-shadow: 0 4px 22px #0007;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.17rem;
  font-weight: bold;
  margin: 0 0 0.5em 0;
  color: ${colors.goldenYellow};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FeatureDesc = styled.p`
  font-size: 1em;
  margin: 0 0 1.1em 0;
  opacity: 0.96;
`;

const GoButton = styled.button`
  background: ${colors.goldenYellow};
  color: ${colors.bgDark};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.03rem;
  padding: 0.5em 1.3em;
  margin-top: auto;
  cursor: pointer;
  box-shadow: 0 2px 7px #0002;
  transition: background 0.16s;
  &:hover {
    background: ${colors.accent};
    color: ${colors.bgDark};
  }
`;

const Footer = styled.footer`
  width: 100vw;
  background: ${colors.bgSecondary};
  color: ${colors.white};
  text-align: center;
  padding: 1.6em 0 0.7em 0;
  font-size: 0.98em;
  z-index: 20;
  box-shadow: 0 -2px 14px #0002;
`;

const actions = [
  {
    label: "Audiences",
    to: "/gestionaudience",
    icon: <Users size={21} strokeWidth={2} />,
  },
  {
    label: "Documents",
    description: "Classez, retrouvez et signez vos documents juridiques.",
    to: "/gestionsubassement",
    icon: <FileText size={21} strokeWidth={2} />,
  },
  {
    label: "Factures",
    to: "/gestionfluxclient",
    icon: <Receipt size={21} strokeWidth={2} />,
  },
  {
    label: "Sécurité",
    to: "/sessionsecur",
    icon: <ShieldCheck size={21} strokeWidth={2} />,
  },
  {
    label: "Profil",
    to: "/Profiledmin",
    icon: <User size={21} strokeWidth={2} />,
  },
];

function Adminmere() {
  const [isNightMode, setIsNightMode] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Parallax scroll effet
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 60]);
  const overlayOpacity = useTransform(scrollY, [0, 200], [1, 0.96]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <GlobalStyle />

      <Header>
        <Link to="/adminmere">
          <Logo src={images.aodblanc} alt="AOD Avocats" />
        </Link>
        <Nav>
          {actions.map((action) => (
            <NavLink
              key={action.to}
              to={action.to}
              className={isActive(action.to) ? "active" : ""}
            >
              {action.icon} {action.label}
            </NavLink>
          ))}
        </Nav>
        <BurgerButton
          aria-label={drawerOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X /> : <Menu />}
        </BurgerButton>
        <TopActions>
          <button
            style={{
              background: "none",
              border: "none",
              color: colors.goldenYellow,
              fontSize: "1.37rem",
              marginRight: "3px",
              cursor: "pointer",
            }}
            title={isNightMode ? "Mode clair" : "Mode sombre"}
            onClick={() => setIsNightMode((v) => !v)}
          >
            {isNightMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <LogoutButton />
        </TopActions>
      </Header>

      {/* Drawer menu mobile */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <DrawerOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <DrawerMenu
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", stiffness: 350, damping: 34 }}
            >
              <DrawerClose
                aria-label="Fermer le menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X />
              </DrawerClose>
              {actions.map((action) => (
                <NavLink
                  key={action.to}
                  to={action.to}
                  style={{
                    fontSize: "1.13rem",
                    padding: "15px 0",
                    marginBottom: "4px",
                    color: isActive(action.to) ? colors.accent : colors.white,
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  {action.icon} {action.label}
                </NavLink>
              ))}
              <div style={{ margin: "36px 0 0 0" }}>
                <LogoutButton />
              </div>
            </DrawerMenu>
          </>
        )}
      </AnimatePresence>

      <Main>
        {/* Parallax Video+Overlay */}
        <ParallaxContainer>
          <VideoBg as={motion.video} autoPlay loop muted style={{ y: yBg }}>
            <source src={feuillevid} type="video/mp4" />
          </VideoBg>
          <Overlay as={motion.div} style={{ opacity: overlayOpacity }} />
        </ParallaxContainer>

        <Content>
          <Title
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Bienvenue chez{" "}
            <span style={{ color: colors.goldenYellow }}>AOD AVOCATS</span>
            <br />
            <span
              style={{
                fontSize: "1.13rem",
                fontWeight: 400,
                color: colors.blueDarkSky,
                textShadow: "none",
              }}
            >
              Votre interface de gestion professionnelle, inspirée par Netflix.
            </span>
          </Title>

          <CardRow style={{ position: "relative", minHeight: 340 }}>
            {actions.map((action, i) => (
              <FeatureCard
                key={action.to}
                whileHover={{ scale: 1.05, y: -7 }}
                initial={{ opacity: 0, y: 40 + 12 * i }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.09 * i, duration: 0.62 }}
                onClick={() => (window.location = action.to)}
                tabIndex={0}
                $index={i}
                $z={i}
              >
                <FeatureTitle>
                  {action.icon} {action.label}
                </FeatureTitle>
                <FeatureDesc>{action.description}</FeatureDesc>
                <GoButton>Accéder</GoButton>
              </FeatureCard>
            ))}
          </CardRow>

          <div style={{ margin: "2em 0 0.2em 0", zIndex: 3 }}>
            <SocialLinks />
          </div>
        </Content>
      </Main>

      <Footer>&copy; 2025 AOD AVOCATS. Tous droits réservés.</Footer>
    </>
  );
}

export default Adminmere;
