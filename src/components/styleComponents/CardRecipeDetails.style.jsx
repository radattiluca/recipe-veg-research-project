import styled from "styled-components";
import CardRecipeDetails from "../CardRecipeDetails";
import sfondoDiets from "../../assets/sfondo-diets.jpg";
import sfondoInfo from "../../assets/sfondo-info.jpg";
import sfondoInto from "../../assets/sfondo-into.jpg";

//qui controlliamo la card dei dettagli della ricetta

export const StyledCardRecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2ddd0;
  margin: auto;

  @media (min-width: 700px) {
    //tablet
  }
`;

export const StyledContainerTitleImg = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 700px) {
    //tablet
  }
`;

export const StyledTitleRecipe = styled.h2`
  background-color: #e2ddd0;
  text-align: left;
  padding: 40px 50px 20px 10px;
  text-align: left;
  font-size: 20px;
  text-transform: capitalize;
  color: #3e303f;
  background-image: url("${sfondoInfo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 700px) {
    //tablet
    text-align: center;
    padding: 70px 50px 30px 10px;
  }
`;

export const StyledImageRecipe = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 700px) {
    //tablet
    max-width: 500px;
    margin: auto;
    padding-top: 30px;
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
  color: #3e303f;
  background-image: url("${sfondoInto}");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 700px) {
    //tablet
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
`;

export const StyledContainerSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5em;
  color: #3e303f;

  & a {
    text-decoration: none;
    color: #3e303f;
    font-weight: 800;
  }

  & h4 {
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
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

  & span {
    color: #3e303f;
  }

  & h4 {
    padding-bottom: 10px;
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
  }

  @media (min-width: 1500px) {
  }
`;

export const StyledContainerOccasions = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2ddd0;
  padding: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: #3e303f;
  text-transform: capitalize;

  & h4 {
    font-weight: 500;
  }

  @media (min-width: 700px) {
    //tablet
  }
`;

export const StyledContainerPreparation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 60px 20px;
  line-height: 1.5em;
  color: #3e303f;
  list-style-position: inside;

  & h4 {
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    //tablet
  }
`;
