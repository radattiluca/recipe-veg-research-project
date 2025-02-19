import styled from "styled-components";
import Navbar from "../Navbar";

export const StyledNavbar = styled(Navbar)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  align-items: ${(props) => props.alignItems};
  position: relative;

  & span {
    color: #e2ddd0;
    position: absolute;
    top: 20px;
    font-size: 1.7em;
    font-weight: 300;
  }

  & a {
    text-decoration: none;
  }

  & img {
    margin-left: 10px;
  }
`;
