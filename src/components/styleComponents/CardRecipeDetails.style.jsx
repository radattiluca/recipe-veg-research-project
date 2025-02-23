import styled from "styled-components";
import CardRecipeDetails from "../CardRecipeDetails";
import sfondoDiets from "../../assets/sfondo-diets.jpg";
import sfondoInfo from "../../assets/sfondo-info.jpg";
import sfondoInto from "../../assets/sfondo-into.jpg";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledCardRecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2ddd0;
  margin: auto;

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    width: 60%;
  }

  @media (min-width: 1500px) {
    //4k
    width: 60%;
    font-size: 1.2em;
  }
`;

export const StyledContainerTitleImg = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
  }

  @media (min-width: 1500px) {
    //4k
  }
`;

export const StyledTitleRecipe = styled.h2`
  background-color: #e2ddd0;
  text-align: left;
  padding: 40px 50px 20px 10px;
  text-align: left;
  font-size: 20px;
  text-transform: capitalize;
  color: #766042;
  background-image: url("${sfondoInfo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 700px) {
    //tablet
    padding: 70px 50px 30px 10px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    margin-top: 30px;
    background-position: right;
    text-align: center;
    padding: 90px 50px 20px 10px;
  }

  @media (min-width: 1500px) {
    //4k
    margin-top: 30px;
    background-position: right;
    text-align: center;
    padding: 120px 50px 20px 10px;
  }
`;

export const StyledImageRecipe = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    max-width: 700px;
    margin: auto;
    padding-top: 40px;
  }

  @media (min-width: 1500px) {
    //4k
    max-width: 700px;
    margin: auto;
    padding-top: 40px;
  }
`;

export const StyledContainerIntolerances = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  padding: 10px;
  background-color: #e2ddd0;
  border-radius: 5px;
  color: #766042;
  background-image: url("${sfondoInto}");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    width: 100%;
    margin-top: 30px;
    text-align: center;
    padding: 40px;

    grid-template-columns: auto auto auto auto;
  }

  @media (min-width: 1500px) {
    //4k
    width: 100%;
    margin-top: 30px;
    text-align: center;
    padding: 40px;
    display: none;
    grid-template-columns: auto auto auto auto;

    &:hover {
      display: flex;
    }
  }
`;

export const StyledInfoRecipe = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2ddd0;
  padding: 20px;
  color: #d4a86f;
  background-image: url("${sfondoInfo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    border-radius: 5px;
    margin-top: 40px;

    & span {
      padding-left: 75px;
    }
  }

  @media (min-width: 1500px) {
    //4k
    border-radius: 5px;
    margin-top: 40px;

    & span {
      padding-left: 90px;
    }
  }
`;

export const StyledContainerSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5em;
  color: #766042;

  & a {
    text-decoration: none;
    color: #766042;
    font-weight: 800;
  }

  & h4 {
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    max-width: 90%;
    margin: auto;
    color: #766042;

    & a {
      color: #766042;
    }
  }

  @media (min-width: 1500px) {
    //4k
    max-width: 90%;
    margin: auto;
    color: #766042;

    margin-top: 40px;

    & a {
      color: #766042;
    }
  }
`;

export const StyledContainerListDiets = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  text-transform: capitalize;
  background-image: url("${sfondoDiets}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;
  margin-top: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: rgba(226, 221, 208, 0.1) 0px 10px 10px -10px;
  padding: 20px 80px 20px 20px;
  color: rgb(118, 96, 66);
  font-size: 18px;
  font-weight: 500;

  & h4 {
    padding-bottom: 10px;
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop

    font-weight: 400;
  }

  @media (min-width: 1500px) {
    //4k

    font-weight: 400;
  }
`;

export const StyledContainerOccasions = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2ddd0;
  padding: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: #766042;
  font-weight: 800;
  text-transform: capitalize;

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    text-align: center;
    background-color: #766042;
    color: #e2ddd0;

    font-weight: 400;

    & h4 {
      color: #d4a86f;
      font-weight: 400;
    }
  }

  @media (min-width: 1500px) {
    //4k
    text-align: center;
    background-color: #766042;
    color: #e2ddd0;

    & h4 {
      color: #d4a86f;
      font-weight: 400;
    }
  }
`;

export const StyledContainerPreparation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5em;
  color: #766042;
  list-style-position: inside;

  & h4 {
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    //laptop
    max-width: 90%;
    margin: auto;
    color: #766042;

    & a {
      color: #766042;
    }
  }

  @media (min-width: 1500px) {
    //4k
    max-width: 90%;
    margin: auto;
    color: #766042;

    & a {
      color: #766042;
    }
  }
`;
