import styled from "styled-components";
import ContainerImage from "../ContainerImage";

//qui controlliamo la dimensione e la posizione dell'immagine della home

export const StyledContainerImage = styled(ContainerImage)`
  width: 100%;
  height: auto;
  display: flex;

  @media (min-width: 700px) {
    height: 800px;
  }

  @media (min-width: 1000px) {
    width: 70%;
    height: auto;
    margin: auto;
    margin-top: -80px;
  }

  @media (min-width: 1400px) {
    width: 60%;
    height: auto;
    margin: auto;
    margin-top: -60px;
  }
`;

export const ImageHome = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: flex;

  @media (min-width: 700px) {
    rotate: 90deg;
    margin-top: -30px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 60%;
    margin: auto;
  }

  @media (min-width: 1500px) {
    width: 60%;
    margin: auto;
  }
`;
