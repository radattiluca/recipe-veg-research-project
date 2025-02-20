import styled from "styled-components";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  width: ${(props) => props.width};
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
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
  padding-left: 30px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
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
  top: 25px;
  left: 65px;
  font-size: 1.7em;
  font-weight: 300;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`;
