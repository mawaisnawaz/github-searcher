import React from "react";
import styled, { keyframes } from "styled-components";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: block;
  height: 100vh;
  left: 0;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
`;

const Spinner = styled.div`
  left: 48%;
  position: fixed;
  top: 48%;
`;

const Rotation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
`;

const Turn = keyframes`
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
`;

const Svg = styled.svg`
  -webkit-animation: ${Rotation} 1.35s linear infinite;
  animation: ${Rotation} 1.35s linear infinite;
  stroke: #0366d6;
`;

const Circle = styled.circle`
  -webkit-animation: ${Turn} 1.35s ease-in-out infinite;
  animation: ${Turn} 1.35s ease-in-out infinite;
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
`;

const Loader = () => {
  return (
    <Overlay>
      <Spinner>
        <Svg
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </Svg>
      </Spinner>
    </Overlay>
  );
};

export default Loader;
