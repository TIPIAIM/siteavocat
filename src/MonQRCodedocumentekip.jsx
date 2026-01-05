import  { useRef } from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";
import { toPng } from "html-to-image";

// -------------------- Styles -------------------------
const QRContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f8fafc 40%, #f8fafc 100%);
  border-radius: 4px 0 8px 0;
   display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
 
  width: 84px;
  height: 84px;
  transform: translate(-50%, -50%);
  border-radius: 8px 0 8px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.11);
  background: #f2c94c44 ;
  object-fit: contain;
  padding: 3px;
  border: 2.5px solid #f2c94c44;
`;

const DownloadBtn = styled.button`
  margin: 1.5rem auto 0;
  display: block;
  padding: 12px 24px;
  background: linear-gradient(90deg, #002B5B 60%, #1A4D2E 100%);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px 0 8px 0;
  box-shadow: 0 3px 16px #002b5b22;
  font-size: 1.06em;
  cursor: pointer;
  transition: 0.17s;
  &:hover {
    background: linear-gradient(90deg, #1A4D2E 60%, #F2C94C 100%);
    color: #002B5B;
  }
`;

const ScanText = styled.p`
  font-weight: 600;
  color: #002B5B;
  font-size: 1.09em;
  margin-top: 1.2rem;
  text-align: center;
`;

// -------------------- Composant -------------------------
const MonQRCodedocumentekip = () => {
  const ref = useRef();

  const handleDownload = () => {
    toPng(ref.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "QRCode-CasierGN.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        alert("Impossible de télécharger le QR code.");
        console.error(err);
      });
  };

  return (
    <div style={{ textAlign: "center", padding: "2.2rem 0" }}>
      <div ref={ref}>
        <QRContainer>
          <QRCode
            value="https://aod-avocats.com/contact"
            size={200}
            bgColor="#f8fafc"
            fgColor="#002B5B"
            level="H"
            style={{ width: "200px", height: "200px", borderRadius: "10px 0 10px 0" }}
            eyeRadius={[
              // coins du QR arrondis (voir doc react-qr-code)
              { outer: [20, 20, 0, 20], inner: [12, 12, 0, 12] }, // coin TL
              { outer: [20, 20, 20, 0], inner: [12, 12, 12, 0] }, // coin TR
              { outer: [0, 20, 20, 20], inner: [0, 12, 12, 12] }  // coin BL
            ]}
          />
          {/* Remplace le chemin du logo ici */}
          <Logo src="/CaptureAOD.avif" alt="Logo" />
        </QRContainer>
      </div>
      <ScanText>Scannez-moi pour accéder au site !</ScanText>
      <DownloadBtn onClick={handleDownload}>
        Télécharger le QR code
      </DownloadBtn>
    </div>
  );
};

export default MonQRCodedocumentekip;
