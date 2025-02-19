import styled from "styled-components";
import CardRecipeDetails from "../CardRecipeDetails";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledCardRecipeDetails = styled(CardRecipeDetails)`
  padding: 40px 20px 20px 20px;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  & h2 {
    color: #ac9485;
    padding: 10px 0 10px 0;
    text-transform: capitalize;
  }

  & h4 {
    padding: 15px 0 7px 0;
    color: #19202a;
  }

  & h5 {
    color: #5b9493;
    padding: 10px 0 10px 0;
  }
  & p {
    line-height: 1.5;
    padding-bottom: 30px;
  }

  & span {
    text-transform: capitalize;
    line-height: 1.5;
    text-align: center;
    display: flex;
  }
`;
