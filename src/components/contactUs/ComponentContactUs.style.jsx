// #e2ddd0 color Background

// #3e303f color Navbar

// #d4a86f color Titles

import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;

  @media (min-width: 700px) {
    width: 70%;
    margin-top: 50px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    font-size: 1.2em;
    margin-top: 50px;
  }

  @media (min-width: 1500px) {
    font-size: 1.5em;
    margin-top: 50px;
  }
`;

export const StyledTitle = styled.h1`
  color: #3e303f;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  background-color: #d4a86f;

  @media (min-width: 700px) {
    border-radius: 20px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    border-radius: 20px;
  }

  @media (min-width: 1500px) {
    border-radius: 20px;
  }
`;

export const StyledSubTitle = styled.h2`
  color: #d4a86f;
  text-align: center;
  font-size: 1.2em;
  padding: 30px 10px 0px 10px;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  padding: 30px 10px 0 10px;
  color: #3e303f;
`;

export const StyledContainerForm = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 700px) {
    width: 60%;
    margin-top: 70px;
  }

  @media (min-width: 1400px) and (max-width: 1500px) {
    width: 50%;
    margin-top: 70px;
  }

  @media (min-width: 1500px) {
    width: 50%;
    margin-top: 70px;
  }
`;

export const StyledMyForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e2ddd0;
  border-radius: 5px;
  color: #3e303f;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border: 1px solid #e2ddd0;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #3e303f;
  resize: none;

  @media (min-width: 700px) {
    height: 200px;
  }

  @media (min-width: 1000px) {
    height: 200px;
  }

  @media (min-width: 1400px) and (max-width: 1500px) {
    height: 200px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #3e303f;
  color: #e2ddd0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledContainerInfo = styled.div`
  margin-top: 20px;
  font-size: 14px;
  padding: 20px;
  color: #3e303f;

  & a {
    text-decoration: none;
    color: #d4a86f;
  }

  @media (min-width: 700px) {
    margin: auto;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    margin: auto;
  }

  @media (min-width: 1500px) {
    margin: auto;
  }
`;

export const StyledInfo = styled.p`
  line-height: 1.6;
`;

export const ExtraDiv = styled.div`
  height: 100vh; //to give extra space between the content and the footer when there is little content
`;
