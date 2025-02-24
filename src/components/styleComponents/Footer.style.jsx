import styled from "styled-components";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export const StyledFooter = styled(Footer)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  bottom: 0;

  @media (min-width: 1000px) and (max-width: 1500px) {
    flex-direction: row;
    font-size: 1.5em;
  }

  @media (min-width: 1500px) {
    flex-direction: row;
    font-size: 1.5em;
  }
`;

export const LeftContainer = styled.div`
  flex: 33%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
  }

  @media (min-width: 1500px) {
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 33%;
`;

export const RightContainer = styled.div`
  flex: 33%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
`;

export const FooterLink = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
  font-size: 0.8em;

  @media (max-width: 700px) {
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    &:hover {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid #d4a86f;
    }
  }

  @media (min-width: 1500px) {
    &:hover {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid #d4a86f;
    }
  }
`;
