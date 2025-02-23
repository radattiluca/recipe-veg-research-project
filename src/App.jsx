import React from "react";
import { useState, useEffect, useContext } from "react";
import ScrollToTop from "./components/utility/ScrollToTop";
import ScrollToResults from "./components/utility/ScrollToResults";

// import style
import {
  AppContainer,
  ContainerNumberResults,
  ContainerParagraph,
} from "./components/styleComponents/AppContainer.style";
import { GlobalStyles } from "./components/styleComponents/GlobalStyles.style";
import { StyledNavbar } from "./components/styleComponents/Navbar.style";
import {
  StyledContainerImage,
  ImageHome,
} from "./components/styleComponents/ContainerImage.style";
import { StyledContainerResults } from "./components/styleComponents/ContainerResults.style";
import { StyledMyForm } from "./components/styleComponents/MyForm.style";

// import img from asset
import sfondoHome from "./assets/sfondoHome.jpg";

//import store
import { RecipesContext, RecipesProvider } from "./stores/RecipesContext";

//import libraries
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const mykey = import.meta.env.VITE_API_KEY;
  const mykey2 = import.meta.env.VITE_API_KEY2; //ricordarsi di toglierne una

  const {
    recipes,
    setRecipes,
    search,
    setSearch,
    query,
    setQuery,
    extendNavbar,
    setExtendNavbar,
    scrollTrigger,
    setScrollTrigger,
  } = useContext(RecipesContext);

  function handleScroll() {
    setScrollTrigger((prev) => !prev);
  }

  useEffect(() => {
    if (query !== "") {
      getRecepies();
    } else {
      setRecipes([]);
    }
  }, [query]);

  function getRecepies() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${mykey2}&query=${query}&diet=vegetarian,vegan`
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
        const resultRecipes = data.results;

        if (resultRecipes.length > 0) {
          console.log(`First Recipe ID: ${resultRecipes[0].id}`);
          setRecipes(resultRecipes);
          setTimeout(() => {
            handleScroll();
          }, 500);
        } else {
          alert(
            "We received no results, remember to only look for vegan or vegetarian ingredients"
          );
          setRecipes([]);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AppContainer>
      <ScrollToTop />
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#766042"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledContainerImage>
        <ImageHome src={sfondoHome} alt="image plates of food" />
      </StyledContainerImage>

      <ContainerParagraph>
        <p>Scopri centinaia di deliziose ricette vegetariane!</p>
        <p>
          Cerca il tuo piatto preferito e segui passo dopo passo i procedimenti
          per prepararlo con semplicità e gusto. 🌱🥗
        </p>
        <p>
          Fa che il cibo sia la tua medicina e la medicina sia il tuo cibo 🌱
        </p>
      </ContainerParagraph>

      <StyledMyForm></StyledMyForm>

      {query && (
        <ContainerNumberResults>
          <h3>
            {recipes.length} results for {query}
          </h3>
        </ContainerNumberResults>
      )}
      <div>
        <ScrollToResults scrollTrigger={scrollTrigger} />
      </div>
      {recipes && recipes.length > 0 && (
        <StyledContainerResults></StyledContainerResults>
      )}
    </AppContainer>
  );
}

export default App;
