import styled from "styled-components";
import DetailsRecipe from "./DetailsRecipe.style";
import ContainerResults from "../../components/styleComponents/ContainerResults.style";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledContainerDetails = styled(ContainerResults)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: 600px;
  margin: auto;
  margin-top: ${(props) => props.marginTop};

  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 10px;
  }

  & h2 {
    color: #dd804c;
    padding-bottom: 10px;
    text-align: center;
    text-transform: capitalize;
  }
  & h3 {
    color: #5b9493;
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 20px;
  }

  & div {
    margin-bottom: 30px;
  }
`;
