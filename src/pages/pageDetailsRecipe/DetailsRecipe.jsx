//component for the API request for recipe details and page details

import { useContext, useEffect } from "react";

//import utility
import ScrollToTop from "../../utility/ScrollToTop";
import CheckMediaQuery from "../../utility/CheckMediaQuery";

//import style
import { AppContainer } from "../../components/app/AppContainer.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledContainerPageDetails } from "../pageDetailsRecipe/DetailsRecipe.style";
import { StyledFooter } from "../../components/footer/Footer.style";

//import card component
import CardRecipeDetails from "../../components/cardDetailsMobile/CardRecipeDetails";
import ContainerCardDesktop from "../../components/cardDetailsDesktop/DesktopCardDetails";

//import store
import { RecipesContext } from "../../stores/RecipesContext";

//import libraries
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function DetailsRecipe({ className, children }) {
  const mykey = import.meta.env.VITE_API_KEY;
  const mykey2 = import.meta.env.VITE_API_KEY2;
  const { setDetails, extendNavbar, isMobile } = useContext(RecipesContext);
  const { recipeId } = useParams();

  CheckMediaQuery();

  useEffect(() => {
    getDetails();
  }, []);

  function getDetails() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${mykey2}`
      )
      .then((response) => {
        if (response.status !== 200) {
          alert("Oops something went wrong");
          throw new Error(
            `Request failed in fetchAuthors with status ${response.status}`
          );
        }
        const data = response.data;

        if (!data || Object.keys(data).length === 0) {
          alert("We received no results");
        } else {
          setDetails(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
        alert("Oops something went wrong");
      });
  }
  return (
    <AppContainer>
      <ScrollToTop />
      <div className={className}>
        <Link to={"/details"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#3e303f"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledContainerPageDetails>
        {isMobile ? <CardRecipeDetails /> : <ContainerCardDesktop />}
      </StyledContainerPageDetails>
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

export default DetailsRecipe;
