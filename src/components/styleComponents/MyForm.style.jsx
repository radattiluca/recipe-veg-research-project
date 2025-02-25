import styled from "styled-components";
import MyForm from "../MyForm";

export const StyledMyForm = styled(MyForm)`
  padding-bottom: 30px;
  padding-top: 30px;
  border-bottom: 3px solid #3e303f;
  width: 80%;
  margin: auto;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    color: #3e303f;
    background: transparent;
    height: 30px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    padding: 10px 20px;
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
      -4px -4px 6px rgba(134, 167, 166, 0.3),
      2px 2px 3px rgba(100, 130, 130, 0.6);
  }

  @keyframes hoverShake {
    0% {
      transform: skew(0deg, 0deg);
    }
    25% {
      transform: skew(3deg, 3deg);
    }
    75% {
      transform: skew(-3deg, -3deg);
    }
    100% {
      transform: skew(0deg, 0deg);
    }
  }

  & input:hover {
    animation: hoverShake 0.15s linear 3;
  }
`;
