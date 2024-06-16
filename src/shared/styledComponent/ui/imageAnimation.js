import styled, { keyframes } from "styled-components";

const imageAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${imageAnimation} 2s ease-in-out;
`;
