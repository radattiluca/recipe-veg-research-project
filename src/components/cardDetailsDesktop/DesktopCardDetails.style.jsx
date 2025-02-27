// #e2ddd0 color Background

// #3e303f color Navbar

// #d4a86f color Titles

import styled from "styled-components";

//import image background
import sfondoDiets from "../../assets/image/sfondo-diets.jpg";
import sfondoInfo from "../../assets/image/sfondo-info.jpg";
import sfondoInto from "../../assets/image/sfondo-into.jpg";

//qui controlliamo la dimensione e la posizione dell'immagine della home

export const StyleDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding-top: 50px;

  @media (min-width: 1500px) {
    font-size: 1.5em;
    width: 60%;
  }
`;

export const StyleContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;

  @media (min-width: 1500px) {
  }
`;

export const StyleContainerImage = styled.div`
  display: flex;
  flex: 40%;
  @media (min-width: 1500px) {
  }
`;

export const StyleImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 1500px) {
  }
`;

export const StyleContainerRightCard = styled.div`
  display: flex;
  flex: 60%;
  flex-direction: column;
  padding: 90px 50px 20px 10px;
  background-image: url("${sfondoInfo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
`;

export const StyledContainerTitle = styled.div`
  display: flex;
  width: 80%;
  text-align: left;
  font-size: 20px;
  text-transform: capitalize;
  color: #3e303f;
  transition: width 500ms, height 500ms, transform 500ms;

  @media (min-width: 1500px) {
    font-size: 1.8em;
  }
`;

export const StyledContainerIntolerances = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  width: 90%;
  justify-content: left;
  border-radius: 5px;
  color: #3e303f;
  padding-top: 10px;
  @media (min-width: 1500px) {
    gap: 10px;
  }
`;

export const StyledContainerInfoRecipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 5px;
  padding-top: 10px;
  color: #d4a86f;
  @media (min-width: 1500px) {
  }
`;

export const StyledContainerOccasions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  text-transform: capitalize;
  padding: 10px;
  margin: auto;
  align-items: center;
  background-color: #3e303f;

  & h4 {
    font-weight: 500;
    color: #d4a86f;
  }
  & span {
    color: #e2ddd0;
  }

  @media (min-width: 1500px) {
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

  @media (min-width: 1500px) {
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
  color: #3e303f;
  font-size: 18px;

  & span {
    color: #3e303f;
  }

  & h4 {
    padding-bottom: 10px;
    color: #d4a86f;
  }
  @media (min-width: 1500px) {
    font-size: 1em;
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
  @media (min-width: 1500px) {
  }
`;
