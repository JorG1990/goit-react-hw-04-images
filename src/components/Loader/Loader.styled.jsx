
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: all 0.5s ease;
  animation: pulse 4s ease-in-out infinite;
  animation-duration: 10s;
`;
