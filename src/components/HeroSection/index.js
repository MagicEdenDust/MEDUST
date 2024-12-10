import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Photo from "../../images/thisguy.png";
import Video from "../../videos/OrdiCo.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home" style={{ height: 920, flexDirection: "row" }}>
      <HeroBg style={{ height: "100%", backgroundColor: "#314478" }}></HeroBg>

      <HeroContent
        style={{
          marginRight: "850px",
          flexDirection: "column",
          paddingBottom: "40px",
          marginBottom: "20px",
        }}
      >
        <HeroH1>$MEDUST</HeroH1>
      </HeroContent>

      <HeroContent
        style={{
          marginRight: "850px",
          flexDirection: "row",
          marginTop: "120px",
        }}
      >
        <HeroP style={{ marginRight: "20px" }}>Diamonds To Dust</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Buy {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <HeroContent style={{ marginLeft: "700px", height: "80%", width: "50%" }}>
        <img src={Photo} alt="Hero" style={{ width: "100%", height: "auto" }} />
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
