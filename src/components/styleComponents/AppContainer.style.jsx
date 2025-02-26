import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  /* height: 100vh; Tolto perchè altrimenti la navbar sticky non funziona*/
  background-color: #e2ddd0; //very light shade of brown

  & span {
    color: #d4a86f;
  }
`;

export const ContainerNumberResults = styled.div`
  display: flex;
  width: 60%;
  padding: 5px;
  border-radius: 10px;
  justify-content: center;
  margin: auto;
  color: #e2ddd0;
  text-transform: capitalize;
  background-color: #3e303f;

  & span {
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    width: 30%;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 20%;
  }

  @media (min-width: 1500px) {
    width: 10%;
  }
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px 40px 20px;
  font-size: 20px;
  font-weight: 700;
  color: #3e303f;
  text-align: center;

  & p {
    padding: 0 20px 20px 0;
  }

  @media (min-width: 700px) {
    text-align: center;
    font-size: 25px;
  }

  @media (min-width: 1000px) {
    font-size: 25px;
  }

  @media (min-width: 1400px) {
    font-size: 25px;
  }
`;

export const ContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3e303f;
  height: 100vh;
  justify-content: center;
  align-items: center;

  & p {
    color: #e2ddd0;
    font-size: 1.5em;
    margin-bottom: 30px;
  }
`;

export const ContainerSpinner = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: mychangeBorder 4s infinite;
  animation-timing-function: linear;
  animation-delay: 250ms;

  @keyframes mychangeBorder {
    0% {
      border-right: 5px solid #e2ddd0;
    }
    25% {
      border-bottom: 5px solid #e2ddd0;
    }
    50% {
      border-left: 5px solid #e2ddd0;
    }
    75% {
      border-top: 5px solid #e2ddd0;
    }
    100% {
      border: none;
    }
  }
`;

export const LogoLoader = styled.img`
  width: 100px;
  position: absolute;
  animation: mymoveEgg 2s infinite;
  animation-delay: -250ms;
  animation-timing-function: linear;

  @keyframes mymoveEgg {
    0% {
      top: -12px;
      left: -20px;
    }
    25% {
      top: -12px;
      left: 120px;
    }
    50% {
      top: 112px;
      left: 120px;
    }
    75% {
      top: 112px;
      left: -20px;
    }
    100% {
      top: -12px;
      left: -20px;
    }
  }
`;
