// #e2ddd0 color Background

// #3e303f color Navbar

// #d4a86f color Titles

import styled from "styled-components";
import ContainerImage from "./ContainerImage";

export const StyledContainerImage = styled(ContainerImage)`
  width: 100%;
  height: auto;
  display: flex;

  @media (min-width: 700px) {
    width: 60%;
    margin: auto;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: -80px;
  }

  @media (min-width: 1500px) {
    width: 60%;
    height: auto;
    margin: auto;
    margin-top: -60px;
  }
`;

export const ImageHome = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: flex;

  @media (min-width: 700px) {
    rotate: 90deg;
    margin-top: -30px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    width: 60%;
    margin: auto;
  }

  @media (min-width: 1500px) {
    width: 60%;
    margin: auto;
  }
`;
