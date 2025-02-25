//page for the aboutus

import React from "react";
import { useContext, useEffect } from "react";

//import libraries
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//import component
import ComponentAboutUs from "../ComponentAboutUs";

//import style
import { AppContainer } from "../styleComponents/AppContainer.style";
import { GlobalStyles } from "../styleComponents/GlobalStyles.style";
import { StyledNavbar } from "../styleComponents/Navbar.style";
import { StyledPageAboutUs } from "./pagesStyle/AboutUs.style";
import { StyledFooter } from "../styleComponents/Footer.style";
import { ExtraDiv } from "../styleComponents/ComponentContactUs.style";

//import utility
import ScrollToTop from "../utility/ScrollToTop";

//import store
import { RecipesContext, RecipesProvider } from "../../stores/RecipesContext";

function PageAboutUs({ className, children }) {
  const { extendNavbar, setExtendNavbar } = useContext(RecipesContext);

  return (
    <AppContainer>
      <ScrollToTop />
      <div className={className}>
        <Link to={"/aboutUs"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#3e303f"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledPageAboutUs>
        <ComponentAboutUs></ComponentAboutUs>
      </StyledPageAboutUs>
      <ExtraDiv></ExtraDiv>
      <StyledFooter
        width="100%"
        height="100px"
        backgroundColor="#3e303f"
        display="flex"
        flexDirection="column"
      ></StyledFooter>
    </AppContainer>
  );
}

export default PageAboutUs;
