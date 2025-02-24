import styled from "styled-components";
import ContainerResults from "../ContainerResults";
import sfondoCards from "../../assets/sfondo-cards.jpg";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledContainerResults = styled(ContainerResults)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px auto 0 auto;
  padding: 60px 20px 60px 20px;

  & a {
    text-decoration: none;
  }

  @media (min-width: 700px) {
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 70px;
  }

  @media (min-width: 1500px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 70px;
    width: 60%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 20px;
  background-color: #f8f7f8;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 700px) {
    width: 70%;
    height: auto;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: initial;
      cursor: pointer;
      opacity: 1;
      transform: scale(1.2);
      transition: all 150ms ease-in-out;
      z-index: 1;
    }
  }

  @media (min-width: 1500px) {
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: transparent;
    box-shadow: none;
    opacity: 0.8;

    &:hover {
      box-shadow: initial;
      cursor: pointer;
      opacity: 1;
      transform: scale(1.2);
      transition: all 150ms ease-in-out;
      z-index: 1;
    }
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 40%;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 60%;
  justify-content: start;
  background-image: url("${sfondoCards}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-left: #9b111e double 4px;

  @media (min-width: 700px) {
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }

  @media (min-width: 1500px) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;

export const ImageRecipe = styled.img`
  display: flex;
  width: 100%;
  height: 99px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (min-width: 700px) {
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
  }

  @media (min-width: 1500px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
  }
`;

export const ContainerRowTitle = styled.div`
  display: flex;
  font-size: 8px;
  padding: 10px 30px 10px 3px;
  margin-right: auto;
  margin-left: 3px;

  a {
    text-decoration: none;
  }

  & h2 {
    text-transform: capitalize;
    font-weight: 600;
    color: #9b111e;
  }

  @media (min-width: 700px) {
    & h2 {
      font-size: 2em;
    }
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    margin-bottom: auto;
    & h2 {
      font-size: 2em;
    }
    & h2:hover {
      border-left: #9b111e double 4px;
      transition: 1s;
      padding: 10px;
    }
  }

  @media (min-width: 1500px) {
    margin-bottom: auto;
    & h2 {
      font-size: 2em;
    }
    & h2:hover {
      border-left: #9b111e double 4px;
      transition: 1s;
      padding: 10px;
    }
  }
`;
