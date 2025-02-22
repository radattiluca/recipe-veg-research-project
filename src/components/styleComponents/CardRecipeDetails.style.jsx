import styled from "styled-components";
import CardRecipeDetails from "../CardRecipeDetails";
import sfondoDiets from "../../assets/sfondo-diets.jpg";
import sfondoInfo from "../../assets/sfondo-info.jpg";
import sfondoInto from "../../assets/sfondo-into.jpg";

//qui controlliamo la dimensione e la posizione dell'immagine
//<TitleRecipe></TitleRecipe>
//   <ImageRecipe></ImageRecipe>
//   <InfoRecipe>
//     <ContainerDiet></ContainerDiet>
//     <ContainerServings></ContainerServings>
//   </InfoRecipe>
//   <SummaryRecipe></SummaryRecipe>
//   <PreparationRecipe></PreparationRecipe>

export const StyledCardRecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #766042;

  margin: auto;
`;

export const StyledContainerTitleImg = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const StyledTitleRecipe = styled.h2`
  background-color: #e2ddd0;
  text-align: left;
  padding: 60px 50px 20px 20px;
  font-size: 20px;
  text-transform: capitalize;
  color: #766042;
  background-image: url("${sfondoInfo}");
  background-position: end;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledImageRecipe = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
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
`;

export const StyledContainerSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5em;
  color: #f4e9dc;

  & a {
    text-decoration: none;
    color: #e2ddd0;
    font-weight: 800;
  }

  & h4 {
    color: #d4a86f;
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
  font-weight: 800;

  & h4 {
    padding-bottom: 10px;
    color: rgb(226, 221, 208);
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
`;

export const StyledContainerPreparation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5em;
  color: #e2ddd0;
  list-style-position: inside;

  & h4 {
    color: #d4a86f;
  }
`;
