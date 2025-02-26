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
  background-color: #3e303f;
`;
