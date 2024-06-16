import styled, { keyframes } from "styled-components";

const textAnimation = keyframes`
  from {
    opacity: 0.5;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  color: #fff;
  animation: ${textAnimation} 2s ease;
`;
