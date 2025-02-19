import styled from "styled-components";
import ButtonSearch from "../ButtonSearch";

//qui controlliamo la dimensione e la posizione dell'immagine

export const StyledButtonSearch = styled(ButtonSearch)`
  background: transparent;
  height: 30px;
  border-radius: 30px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    inset -7px -7px 10px 0px rgba(134, 167, 166, 0.3),
    7px 7px 20px 0px rgba(75, 100, 100, 0.2),
    4px 4px 5px 0px rgba(50, 75, 75, 0.3);

  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4),
    -4px -4px 6px rgba(134, 167, 166, 0.3), 2px 2px 3px rgba(100, 130, 130, 0.6);
`;
