import styled from "styled-components";
import ContainerResults from "../ContainerResults";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledContainerResults = styled(ContainerResults)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: 600px;
  margin: auto;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-bottom: ${(props) => props.paddingBottom};
  display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};

  & a {
    text-decoration: none;
  }

  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
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
  }
`;
