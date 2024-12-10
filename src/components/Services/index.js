import React from "react";
import videoBackground from "../../videos/dust.mp4";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";


const Services = () => {
  return (
    <ServicesContainer id="services">
      {/* Video Background */}
      <video
  autoPlay
  loop
  muted
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  }}
>
  <source src={videoBackground} type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Content */}
      <ServicesH1>Diamonds To Dust</ServicesH1>
      <ServicesWrapper style={{ flexDirection: "row" }}>
        <ServicesCard>
          <ServicesH2>Step 1</ServicesH2>
          <ServicesP>
            <strong>Download Phantom Wallet:</strong> Download and install the
            Phantom Wallet either from the app store on your phone or as a
            browser extension for desktop.
          </ServicesP>
          <ServicesP>
            <a
              href="https://phantom.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Phantom Wallet
            </a>
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesH2>Step 2</ServicesH2>
          <ServicesP>
            <strong>Buy Some Solana:</strong> Purchase $SOL from an exchange or
            bridge $SOL and send it to your Phantom Wallet.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesH2>Step 3</ServicesH2>
          <ServicesP>
            <strong>Buy $MEDUST:</strong> Go to Decentralized Exchanges (DEXs),
            and paste the $MEDUST contract address listed on this website to
            swap your SOL for MEDUST.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesH2>Step 4</ServicesH2>
          <ServicesP>
            <strong>Add $MEDUST to Your Wallet:</strong> Add the $MEDUST
            contract address to your Phantom Wallet for your $MEDUST tokens to
            show. Let's get Diamonds to Dust!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
