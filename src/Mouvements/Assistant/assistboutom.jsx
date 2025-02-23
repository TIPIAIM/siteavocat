import { useState } from "react";
import { Hand, X } from "lucide-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./FloatingButton.module.css";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.floatingContainer}>
      <div className={styles.tooltipContainer}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.mainButton} ${
            isOpen ? styles.rotated : ""
          }`}
          aria-label={isOpen ? "Fermer " : "Ouvrir en cliquant"}
        >
          <div className={styles.iconWrapper}>
            {isOpen ? <X /> : <Hand />}
          </div>
        </button>

        <div className={styles.tooltip}>
          {isOpen ? "Fermer " : "Ouvrir en cliquant"}
        </div>
      </div>

      <div className={`${styles.animatedContent} ${
        isOpen ? styles.slideIn : styles.slideOut
      }`}>
        <div className={styles.contentText}>
          <h5>Besoin d`aide ?</h5>
          <Link to="assistance">
            <Button className={styles.pulseButton}>Cliquez ici</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;