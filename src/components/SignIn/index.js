import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the eyelids closing with more natural timing
const closeTop = keyframes`
  0%, 100% { transform: translateY(-90%); }
  45% { transform: translateY(0); }
  55% { transform: translateY(0); }
`;

const closeBottom = keyframes`
  0%, 100% { transform: translateY(90%); }
  45% { transform: translateY(0); }
  55% { transform: translateY(0); }
`;

// Styled component for the black page
const BlackPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Updated Eye component with gradient and shadow for more depth
const Eye = styled.div`
  width: 50px;
  height: 50px;
  background: radial-gradient(circle closest-side, white, #d8d8d8);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin: 0 20px;
  position: relative;
  overflow: hidden;
`;

// Updated Pupil component with gradient for a more lifelike appearance
const Pupil = styled.div`
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #000, #555);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Styled component for the eyelids with a smoother transition
const Eyelid = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  transition: all 0.1s ease-in-out;
`;

const TopEyelid = styled(Eyelid)`
  animation: ${closeTop} 3s infinite ease-in-out;
`;

const BottomEyelid = styled(Eyelid)`
  top: auto;
  bottom: 0;
  animation: ${closeBottom} 3s infinite ease-in-out;
`;

// Styled component for the container of eyes to manage layout
const EyesContainer = styled.div`
  display: flex;
`;

const BlinkingEyes = () => {
  return (
    <BlackPage>
      <EyesContainer>
        <Eye>
          <Pupil />
          <TopEyelid />
          <BottomEyelid />
        </Eye>
        <Eye>
          <Pupil />
          <TopEyelid />
          <BottomEyelid />
        </Eye>
      </EyesContainer>
    </BlackPage>
  );
};

export default BlinkingEyes;
