import styled from "styled-components";
import ContainerResults from "../ContainerResults";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledContainerResults = styled(ContainerResults)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};

  /* & img {
  }

  & h2 {
    color: #5b9493;
    padding: 10px 0 30px 10px;
    text-align: left;
    text-transform: capitalize;
    font-size: 1em;
  }
  & h3 {
    color: #5b9493;
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 20px;
  }

  & div {
    margin-bottom: 30px;
    border-radius: 10px;
    min-height: 107px;
    display: grid;
    grid-template-columns: auto auto auto;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  & button {
    display: flex;
    position: relative;
    bottom: -80px;
    right: 20px;
    background-color: #5b9493;
    color: #f9f5f1;
    height: 20px;
    padding: 0 5px 0 5px;
    border-radius: 5px;
    cursor: pointer;
  } */
`;

export const ImageHome = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: auto;
  margin-bottom: 20px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 30%;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 70%;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

// export const ContainerImageRecipe = styled.div`
//   display: flex;
//   width: 100%;
//   height: auto;
//   background-color: aliceblue;
// `;

export const ImageRecipe = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ContainerRowTitle = styled.div`
  background-color: yellow;
  display: flex;
  font-size: 10px;
  padding: 10px;
  margin-right: auto;
`;
export const ContainerRowButton = styled.div`
  background-color: orange;
  display: flex;
  padding: 5px;
  margin-left: auto;
`;

export const StyleButtonRecipe = styled.button`
  cursor: pointer;
  border: none;
  height: 20px;
  padding: 0 5px 0 5px;
  border-radius: 5px;
`;
