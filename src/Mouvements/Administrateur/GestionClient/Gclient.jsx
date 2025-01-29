import { useState, useEffect } from "react";
import {
  useAnimate,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"; // Remplacez useViewportScroll par useScroll
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { MdTurnSharpLeft } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/img/logoAODnoir.avif") no-repeat center center/cover;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  background: #1f2937;
  border-radius: 50%;
  transition: background 0.8s;

  &:hover {
    background: #2563eb;
  }

  svg {
    color: #90e0ef;
    font-size: 1.25rem;
  }
`;

const Menu = styled.nav`
  padding: 0.1rem;
  transition: background 0.8s;
  background-color: #1f2937;
  border-radius: 0.1rem;
  box-shadow: 4px 4px 1px #90e0ef;
`;

const MenuButton = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
  background: linear-gradient(30deg, #2563eb, #1e3a8a, #90e0ef);
  background-size: 300% 300%;
  border: none;
  outline: none;
  border-radius: 0.02rem;
  padding: 0.5rem 1rem;
  animation: gradient-shift 3s infinite;

  .arrow {
    transition: transform 2.2s;
    transform-origin: center;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const MenuList = styled.ul`
  margin-top: 0.9rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  list-style: none;
  padding: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;

  li {
    margin-bottom: 0.5rem;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-20px)"};
    transition: opacity 0.5s, transform 0.5s;

    a {
      color: #93c5fd;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.5s, transform 0.5s;

      &:hover {
        color: #2563eb;
        background: rgba(37, 99, 235, 0.03);
        border-radius: 0.1rem;
        padding: 0.5rem 1rem;
        transition: background 0.8s;
      }
    }
  }
`;

const Title = styled.h1`
  color: #90e0ef;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
`;

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
  }, [isOpen, animate]);

  return scope;
}

export default function Gclient() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollY } = useScroll(); // Remplacez useViewportScroll par useScroll
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const scope = useMenuAnimation(isOpen);

  return (
    <Container>
      <Overlay>
        <BackButton to="/admindasboardgenerale">
          <IoReturnDownBack />
        </BackButton>

        <motion.div
          ref={ref}
          style={{ scale }}
          className={`text-center ${
            inView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 mb-8`}
        >
          <Title>
            <Typewriter
              options={{
                strings: [
                  "Bienvenue sur l'espace clients",
                  "Création client",
                  "Enregistrement client",
                  "Mise à jour client"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </Title>
        </motion.div>

        <Menu ref={scope}>
          <MenuButton
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Choisissez une action ?
            <div className="arrow">
              <MdTurnSharpLeft />
            </div>
          </MenuButton>

          <MenuList isOpen={isOpen}>
            <li>
              <Link to="/comptecl">Ajouter un nouveau client</Link>
            </li>
            <li>
              <Link to="/listeCl">Afficher la liste des clients</Link>
            </li>
          </MenuList>
        </Menu>
      </Overlay>
    </Container>
  );
}
