import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;

  @media (min-width: 700px) {
    width: 70%;
  }

  @media (min-width: 1000px) {
    font-size: 1.2em;
  }

  @media (min-width: 1400px) {
    font-size: 1.5em;
  }
`;

export const StyledTitle = styled.h1`
  color: #3e303f;
  text-align: center;
  text-transform: capitalize;
  padding: 30px 20px 30px 20px;
`;

export const StyledParagraphOne = styled.p`
  color: #3e303f;
  padding: 10px 20px 10px 20px;
  margin: auto;
`;

export const StyledParagraphTwo = styled.p`
  color: #3e303f;
  padding: 10px 20px 10px 20px;
  margin: auto;
`;

export const StyledContainerValues = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  padding: 30px 0 30px 0;
`;

export const StyedContainerTitleValues = styled.h2`
  color: #3e303f;
  padding: 10px;
  margin: auto;
`;

export const StyledSpanValues = styled.span`
  color: #d4a86f;
  padding: 5px;
`;

export const StyledDivValues = styled.div`
  color: #3e303f;
  padding: 5px;
`;

export const StyledTitleCommunity = styled.h2`
  color: #3e303f;
  padding: 10px;
  margin: auto;
`;

export const StyledParagraphCommunity = styled.p`
  color: #3e303f;
  padding: 10px 20px 10px 20px;
  margin: auto;
`;

export const LinkCommunity = styled(Link)`
  color: #d4a86f;
  text-decoration: none;
  margin: auto;
`;

export const ExtraDiv = styled.div`
  height: 50vh;
`;
