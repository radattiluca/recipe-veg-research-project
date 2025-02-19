import styled from "styled-components";
import ContainerImage from "../ContainerImage";

//qui controlliamo la dimensione e la posizione dell'immagine del panda

export const StyledContainerImage = styled(ContainerImage)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: 600px;
  margin: auto;
  margin-top: ${(props) => props.marginTop};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
