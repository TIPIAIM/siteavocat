import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import maitreetblouz from "../../../assets/Image/maitreetblouz.avif";

// Données des articles
const articlesData = [
  {
    id: 1,
    title: "Analyse sur le récent privilège accordé, par l'effet de la Grâce",
    excerpt: "Examen des implications juridiques de la grâce présidentielle accordée à Moussa Dadis Camara",
    content: (
      <>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle accordée par le président Mamadi Doumbouya à
          Moussa Dadis Camara, en vertu de l'article 170 du Code pénal guinéen,
          alors que ses avocats ont interjeté appel, soulève plusieurs questions
          juridiques quant à son impact sur le procès en appel.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          1. Effet de la grâce sur la condamnation
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle est une mesure de clémence qui ne remet pas en
          cause la culpabilité du condamné. Elle supprime ou réduit la peine,
          mais ne l'annule pas. Ainsi, sur le plan strictement juridique, la
          condamnation de Moussa Dadis Camara demeure inscrite à son casier
          judiciaire, même s'il bénéficie d'une réduction ou d'une suppression
          de peine.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          2. Conséquence sur le procès en appel
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-cyan-950"
        >
          Le recours en appel vise à contester la condamnation rendue en
          première instance. En principe, l'exercice du droit d'appel par l'une
          des parties conformément au dispositions de l'article 577 du code de
          procédure pénale de la république de Guinée, suspend l'exécution de la
          peine tant que la décision n'est pas définitive.Toutefois, la grâce
          intervient après une condamnation en première instance et s'applique à
          la peine prononcée.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-2"
        >
          Deux scénarios sont possibles :
        </motion.p>
        
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="list-disc pl-5 text-cyan-950"
        >
          <li>
            Si la grâce concerne uniquement la peine : Le procès en appel peut
            se poursuivre car l'appel porte également sur la déclaration de
            culpabilité et les éventuels vices de procédure. La Chambre des
            appels correctionels pourrait confirmer ou infirmer le jugement.
          </li>
          <li>
            Si la grâce est interprétée comme une extinction de la peine
            empêchant tout procès en appel : Cela pourrait soulever un débat
            juridique. En théorie, la grâce ne fait pas disparaître la
            condamnation et ne prive pas la juridiction d'appel notammentvla
            chambre des appels correctionnels de son pouvoir d'examiner
            l'affaire en fait et en droit.
          </li>
        </motion.ul>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          3. Risque d'un vide juridique ou d'une controverse judiciaire
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'application de la grâce en pleine procédure d'appel peut créer une
          situation où l'accusé bénéficie de la clémence présidentielle avant
          même que la décision ne soit définitive. Cela pourrait être interprété
          comme une ingérence dans le processus judiciaire. A cet égard la
          Chambre des appels correctionnels de la Cour d'Appel de Conakry doit
          se prononcer sur la recevabilité de l'appel après l'intervention de la
          grâce.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'incidence est majeur quand on sait que l'article préliminaire du
          code de procédure pénal dispose que en son point 4, que les personnes
          se trouvant dans des conditons semblables et poursuivies pour les
          mêmes infractions doivent être jugés selon les mêmes règles. Cette
          règle connait un incident quant on sait que monsieur Dadis CAMARA, est
          poursuivie au mêmes titre que le colonel PIVI, Marcel et autres pour
          les mêmes infractions.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          Peut on dire qu'il s'en découle un traitement de faveur? Neéamoins, le
          président de la n'a pas besoin de justifier sa décision d'accorder la
          grâce pour la totalité de la peine
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-cyan-950"
        >
          Pour finir, l'appel intérjeté est en principe valable, car la grâce ne
          supprime pas la condamnation même si elle provoque, dans l'espèce, une
          incidence le procès logé dans le principe du double dégré de
          juridiction. Notons, si l'appel a un effet dévolutif, comment les
          juges d'appels apprécierons la grâce inetervenue en faveur de monsieur
          CAMARA ?
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="text-cyan-950 mt-4"
        >
          Cependant, la manière dont la Chambre des appels correctionnels de la
          cour d'appel de Conakry, interprétera cette situation dépendra de
          l'argumentation des parties et de la position des juges. Par ailleurs,
          et il faut dire l'affaire pourrait prendre une tournure hautement
          politique et juridique en fonction des interprétations et des
          réactions des différentes parties prenantes.
        </motion.p>
      </>
    ),
    imageUrl: maitreetblouz,
    date: "17 avril 2025: Me Amadou oury Avocat chez AOD-AVOCATS",
  },
  {
    id: 1,
    title: "Analyse sur le récent privilège accordé, par l'effet de la Grâce",
    excerpt: "Examen des implications juridiques de la grâce présidentielle accordée à Moussa Dadis Camara",
    content: (
      <>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle accordée par le président Mamadi Doumbouya à
          Moussa Dadis Camara, en vertu de l'article 170 du Code pénal guinéen,
          alors que ses avocats ont interjeté appel, soulève plusieurs questions
          juridiques quant à son impact sur le procès en appel.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          1. Effet de la grâce sur la condamnation
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle est une mesure de clémence qui ne remet pas en
          cause la culpabilité du condamné. Elle supprime ou réduit la peine,
          mais ne l'annule pas. Ainsi, sur le plan strictement juridique, la
          condamnation de Moussa Dadis Camara demeure inscrite à son casier
          judiciaire, même s'il bénéficie d'une réduction ou d'une suppression
          de peine.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          2. Conséquence sur le procès en appel
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-cyan-950"
        >
          Le recours en appel vise à contester la condamnation rendue en
          première instance. En principe, l'exercice du droit d'appel par l'une
          des parties conformément au dispositions de l'article 577 du code de
          procédure pénale de la république de Guinée, suspend l'exécution de la
          peine tant que la décision n'est pas définitive.Toutefois, la grâce
          intervient après une condamnation en première instance et s'applique à
          la peine prononcée.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-2"
        >
          Deux scénarios sont possibles :
        </motion.p>
        
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="list-disc pl-5 text-cyan-950"
        >
          <li>
            Si la grâce concerne uniquement la peine : Le procès en appel peut
            se poursuivre car l'appel porte également sur la déclaration de
            culpabilité et les éventuels vices de procédure. La Chambre des
            appels correctionels pourrait confirmer ou infirmer le jugement.
          </li>
          <li>
            Si la grâce est interprétée comme une extinction de la peine
            empêchant tout procès en appel : Cela pourrait soulever un débat
            juridique. En théorie, la grâce ne fait pas disparaître la
            condamnation et ne prive pas la juridiction d'appel notammentvla
            chambre des appels correctionnels de son pouvoir d'examiner
            l'affaire en fait et en droit.
          </li>
        </motion.ul>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          3. Risque d'un vide juridique ou d'une controverse judiciaire
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'application de la grâce en pleine procédure d'appel peut créer une
          situation où l'accusé bénéficie de la clémence présidentielle avant
          même que la décision ne soit définitive. Cela pourrait être interprété
          comme une ingérence dans le processus judiciaire. A cet égard la
          Chambre des appels correctionnels de la Cour d'Appel de Conakry doit
          se prononcer sur la recevabilité de l'appel après l'intervention de la
          grâce.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'incidence est majeur quand on sait que l'article préliminaire du
          code de procédure pénal dispose que en son point 4, que les personnes
          se trouvant dans des conditons semblables et poursuivies pour les
          mêmes infractions doivent être jugés selon les mêmes règles. Cette
          règle connait un incident quant on sait que monsieur Dadis CAMARA, est
          poursuivie au mêmes titre que le colonel PIVI, Marcel et autres pour
          les mêmes infractions.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          Peut on dire qu'il s'en découle un traitement de faveur? Neéamoins, le
          président de la n'a pas besoin de justifier sa décision d'accorder la
          grâce pour la totalité de la peine
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-cyan-950"
        >
          Pour finir, l'appel intérjeté est en principe valable, car la grâce ne
          supprime pas la condamnation même si elle provoque, dans l'espèce, une
          incidence le procès logé dans le principe du double dégré de
          juridiction. Notons, si l'appel a un effet dévolutif, comment les
          juges d'appels apprécierons la grâce inetervenue en faveur de monsieur
          CAMARA ?
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="text-cyan-950 mt-4"
        >
          Cependant, la manière dont la Chambre des appels correctionnels de la
          cour d'appel de Conakry, interprétera cette situation dépendra de
          l'argumentation des parties et de la position des juges. Par ailleurs,
          et il faut dire l'affaire pourrait prendre une tournure hautement
          politique et juridique en fonction des interprétations et des
          réactions des différentes parties prenantes.
        </motion.p>
      </>
    ),
    imageUrl: maitreetblouz,
    date: "17 avril 2025: Me Amadou oury Avocat chez AOD-AVOCATS",
  },
  {
    id: 1,
    title: "Analyse sur le récent privilège accordé, par l'effet de la Grâce",
    excerpt: "Examen des implications juridiques de la grâce présidentielle accordée à Moussa Dadis Camara",
    content: (
      <>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle accordée par le président Mamadi Doumbouya à
          Moussa Dadis Camara, en vertu de l'article 170 du Code pénal guinéen,
          alors que ses avocats ont interjeté appel, soulève plusieurs questions
          juridiques quant à son impact sur le procès en appel.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          1. Effet de la grâce sur la condamnation
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-cyan-950"
        >
          La grâce présidentielle est une mesure de clémence qui ne remet pas en
          cause la culpabilité du condamné. Elle supprime ou réduit la peine,
          mais ne l'annule pas. Ainsi, sur le plan strictement juridique, la
          condamnation de Moussa Dadis Camara demeure inscrite à son casier
          judiciaire, même s'il bénéficie d'une réduction ou d'une suppression
          de peine.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          2. Conséquence sur le procès en appel
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-cyan-950"
        >
          Le recours en appel vise à contester la condamnation rendue en
          première instance. En principe, l'exercice du droit d'appel par l'une
          des parties conformément au dispositions de l'article 577 du code de
          procédure pénale de la république de Guinée, suspend l'exécution de la
          peine tant que la décision n'est pas définitive.Toutefois, la grâce
          intervient après une condamnation en première instance et s'applique à
          la peine prononcée.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-2"
        >
          Deux scénarios sont possibles :
        </motion.p>
        
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="list-disc pl-5 text-cyan-950"
        >
          <li>
            Si la grâce concerne uniquement la peine : Le procès en appel peut
            se poursuivre car l'appel porte également sur la déclaration de
            culpabilité et les éventuels vices de procédure. La Chambre des
            appels correctionels pourrait confirmer ou infirmer le jugement.
          </li>
          <li>
            Si la grâce est interprétée comme une extinction de la peine
            empêchant tout procès en appel : Cela pourrait soulever un débat
            juridique. En théorie, la grâce ne fait pas disparaître la
            condamnation et ne prive pas la juridiction d'appel notammentvla
            chambre des appels correctionnels de son pouvoir d'examiner
            l'affaire en fait et en droit.
          </li>
        </motion.ul>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-cyan-950 font-semibold mt-4"
        >
          3. Risque d'un vide juridique ou d'une controverse judiciaire
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'application de la grâce en pleine procédure d'appel peut créer une
          situation où l'accusé bénéficie de la clémence présidentielle avant
          même que la décision ne soit définitive. Cela pourrait être interprété
          comme une ingérence dans le processus judiciaire. A cet égard la
          Chambre des appels correctionnels de la Cour d'Appel de Conakry doit
          se prononcer sur la recevabilité de l'appel après l'intervention de la
          grâce.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-cyan-950"
        >
          L'incidence est majeur quand on sait que l'article préliminaire du
          code de procédure pénal dispose que en son point 4, que les personnes
          se trouvant dans des conditons semblables et poursuivies pour les
          mêmes infractions doivent être jugés selon les mêmes règles. Cette
          règle connait un incident quant on sait que monsieur Dadis CAMARA, est
          poursuivie au mêmes titre que le colonel PIVI, Marcel et autres pour
          les mêmes infractions.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-cyan-950"
        >
          Peut on dire qu'il s'en découle un traitement de faveur? Neéamoins, le
          président de la n'a pas besoin de justifier sa décision d'accorder la
          grâce pour la totalité de la peine
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-cyan-950"
        >
          Pour finir, l'appel intérjeté est en principe valable, car la grâce ne
          supprime pas la condamnation même si elle provoque, dans l'espèce, une
          incidence le procès logé dans le principe du double dégré de
          juridiction. Notons, si l'appel a un effet dévolutif, comment les
          juges d'appels apprécierons la grâce inetervenue en faveur de monsieur
          CAMARA ?
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="text-cyan-950 mt-4"
        >
          Cependant, la manière dont la Chambre des appels correctionnels de la
          cour d'appel de Conakry, interprétera cette situation dépendra de
          l'argumentation des parties et de la position des juges. Par ailleurs,
          et il faut dire l'affaire pourrait prendre une tournure hautement
          politique et juridique en fonction des interprétations et des
          réactions des différentes parties prenantes.
        </motion.p>
      </>
    ),
    imageUrl: maitreetblouz,
    date: "17 avril 2025: Me Amadou oury Avocat chez AOD-AVOCATS",
  },
  // ... autres articles
];

// Styles avec styled-components (inchangés)
const ArticlesContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  margin-bottom: 10rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a365d;
  text-align: center;
  position: relative;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  color: #1a365d;

  &:after {
    content: "";
    display: block;
    width: 120px;
    height: 3px;
    background: #0077b6;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(motion.article)`
  background: #fff;
  overflow: hidden;
  box-shadow: 0 3px 1px #0077b6;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`;

const ArticleImage = styled.div`
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ArticleCard}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
  }
`;

const ArticleContent = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ArticleDate = styled.span`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a365d;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ArticleExcerpt = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ReadMoreButton = styled.button`
  color: #1a365d;
  text-decoration: none;
  font-weight: 500;
  align-self: flex-start;
  position: relative;
  padding-bottom: 2px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  padding: 0;
  margin-top: auto;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1a365d;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  width: 90%;
  max-width: 1200px;
  max-height: 98vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    max-height: 85vh;
  }
`;

const ModalImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    min-height: 300px;
    object-fit: cover;
    border-radius: 0px 0 0 0px;
  }

  @media (max-width: 768px) {
    height: 400px;

    img {
      border-radius: 8px 8px 0 0;
      min-height: auto;
    }
  }
`;

const ModalText = styled.div`
  padding: 2rem;
  overflow-y: auto;
  line-height: 1.8;

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
  }

  li::before {
    content: "•";
    color: #0077b6;
    font-weight: bold;
    display: inline-block;
    width: 2em;
    margin-left: -1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.3rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-align: center @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ModalDate = styled.span`
  font-size: 0.7rem;
  color: #666;
  display: block;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const ModalFullContent = styled.div`
  color: #555;
  line-height: 1.4;
  font-size: 1rem;

  p {
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
    transform: rotate(90deg);
    border-color: #adb5bd;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #495057;
    transition: all 0.2s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover::before,
  &:hover::after {
    background-color: #212529;
  }
`;

// Animations
const cardVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(4px)",
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.2 },
  },
};

const modalContentVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      delay: 0.1,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const ArticleDroitPenl = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ArticlesContainer className="bg-slate-50">
      <SectionTitle>Nos Publications</SectionTitle>

      <ArticlesGrid>
        {articlesData.map((article) => (
          <ArticleCard
            key={article.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <ArticleImage>
              <img src={article.imageUrl} alt={article.title} loading="lazy" />
            </ArticleImage>

            <ArticleContent>
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ReadMoreButton onClick={() => openModal(article)}>
                Voire plus
              </ReadMoreButton>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>

      <AnimatePresence>
        {selectedArticle && (
          <ModalOverlay
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <ModalContent
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} aria-label="Fermer" />

              <ModalImage>
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                />
              </ModalImage>

              <ModalText>
                <ModalTitle>{selectedArticle.title}</ModalTitle>
                <ModalFullContent>
                  {selectedArticle.content}
                </ModalFullContent>
                <ModalDate>{selectedArticle.date}</ModalDate>
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ArticlesContainer>
  );
};

export default ArticleDroitPenl;