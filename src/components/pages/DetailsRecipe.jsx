import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

//import utility
import ScrollToTop from "../utility/ScrollToTop";
import CheckMediaQuery from "../utility/CheckMediaQuery";

//import style
import { AppContainer } from "../styleComponents/AppContainer.style";
import { StyledNavbar } from "../styleComponents/Navbar.style";
import { GlobalStyles } from "../styleComponents/GlobalStyles.style";
import { StyledContainerPageDetails } from "./pagesStyle/DetailsRecipe.style";
import { StyledFooter } from "../styleComponents/Footer.style";

//import card component
import CardRecipeDetails from "../CardRecipeDetails";
import ContainerCardDesktop from "../DesktopCardDetails";

//import store
import { RecipesContext, RecipesProvider } from "../../stores/RecipesContext";

import axios from "axios";
import { Link } from "react-router-dom";
import logoEgg from "../../assets/logo-egg.png";

function DetailsRecipe({ className, children }) {
  const mykey = import.meta.env.VITE_API_KEY;
  const mykey2 = import.meta.env.VITE_API_KEY2; //ricordarsi di toglierne una
  const {
    details,
    setDetails,
    extendNavbar,
    setExtendNavbar,
    isMobile,
    setIsMobile,
  } = useContext(RecipesContext);
  const { recipeId } = useParams();

  console.log("Ho preso l'id:" + recipeId);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  console.log("La query è mobile?" + isMobile);

  useEffect(() => {
    getDetails();
  }, []);

  function getDetails() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${mykey}`
      )
      .then((response) => {
        console.log("Risposta API:", response.data);
        if (response.status !== 200) {
          alert("Oops something went wrong");
          throw new Error(
            `Request failed in fetchAuthors with status ${response.status}`
          );
        }
        const data = response.data;
        const resultDetailsRecipes = data.readyInMinutes;
        console.log(resultDetailsRecipes);

        if (data.length === 0) {
          alert(
            "We received no results, remember to only look for vegan or vegetarian ingredients"
          );
        } else {
          setDetails(data);
        }
      })
      .catch((error) => {
        console.log(error);
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
        {/* <CardRecipeDetails></CardRecipeDetails> */}
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

//questa è la pagina dei dettagli dove avviene la richiesta API e dove visualizzaimo tramite codice jsx su schermo tutti i componenti necessari.
