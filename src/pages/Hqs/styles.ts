import styled from "styled-components";

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  &.active {
    background: linear-gradient(90deg, black 50%, rgba(0, 0, 0, 0.3) 90%);
    z-index: 2;
  }
`;
