import styled from "styled-components";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  align-items: ${(props) => props.alignItems};
  position: relative;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-left: 10px;

  @media (min-width: 700px) {
    padding-left: 30px;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;

  @media (min-width: 700px) {
    padding-right: 30px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;
  width: max-content;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoEgg = styled.img`
  width: 35px;
`;

export const SpanLogo = styled.span`
  color: #e2ddd0;
  position: absolute;
  top: 32px;
  left: 45px;
  font-size: 1.7em;
  font-weight: 300;

  @media (min-width: 700px) {
    left: 65px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #e2ddd0;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  display: flex;
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const EggLinkToHome = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
`;
