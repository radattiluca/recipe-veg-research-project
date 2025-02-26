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
    text-align: center;
  }
`;

export const ContainerSpinner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LogoLoader = styled.img`
  width: 100px;
  position: absolute;
  animation: mymoveEgg 4s infinite;
  animation-timing-function: linear;

  @keyframes mymoveEgg {
    0% {
      top: 0;
      left: 0px;
      rotate: 0deg;
    }
    25% {
      top: 40px;
      left: 25%;
      rotate: 180deg;
    }
    50% {
      top: 0;
      left: 50%;
      rotate: 360deg;
    }
    75% {
      top: 40px;
      left: 75%;
      rotate: 540deg;
    }
    100% {
      top: 0;
      left: 100%;
      rotate: 720deg;
    }
  }
`;
