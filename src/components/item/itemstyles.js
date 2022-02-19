import styled, { keyframes } from "styled-components";

const itemAnimation = keyframes` 
0%{ transform: translateX(-100px);}
100%{ transform: translateX(0);}
`;

export const Item_style = styled.div`
  margin: 1em auto 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 20em;
  padding: 2em 0.5em;

  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  animation-name: ${itemAnimation};
  animation-duration: 2s;
`;
