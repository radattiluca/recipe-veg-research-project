//page for the contactus form

import { useContext } from "react";

//import libraries
import { Link } from "react-router-dom";

//import component
import ComponentContactUs from "../../components/contactUs/ComponentContactUs";
//import style
import { AppContainer } from "../../components/app/AppContainer.style";
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";
import { StyledContactUs } from "./ContactUs.style";
import { StyledFooter } from "../../components/footer/Footer.style";
import { ExtraDiv } from "../../components/contactUs/ComponentContactUs.style";
//import utility
import ScrollToTop from "../../utility/ScrollToTop";

//import store
import { RecipesContext } from "../../stores/RecipesContext";

function PageContactUs({ className, children }) {
  const { extendNavbar } = useContext(RecipesContext);

  return (
    <AppContainer>
      <ScrollToTop />
      <div className={className}>
        <Link to={"/contactUs"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#3e303f"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledContactUs>
        <ComponentContactUs></ComponentContactUs>
      </StyledContactUs>
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

export default PageContactUs;
