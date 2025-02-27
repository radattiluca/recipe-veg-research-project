//page for the aboutus

import { useContext } from "react";

//import libraries
import { Link } from "react-router-dom";

//import component
import ComponentAboutUs from "../../components/aboutUs/ComponentAboutUs";

//import style
import { AppContainer } from "../../components/app/AppContainer.style";
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";
import { StyledPageAboutUs } from "./AboutUs.style";
import { StyledFooter } from "../../components/footer/Footer.style";
import { ExtraDiv } from "../../components/contactUs/ComponentContactUs.style";

//import utility
import ScrollToTop from "../../utility/ScrollToTop";

//import store
import { RecipesContext } from "../../stores/RecipesContext";

function PageAboutUs({ className, children }) {
  const { extendNavbar } = useContext(RecipesContext);

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
