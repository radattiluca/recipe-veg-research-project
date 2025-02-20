import React from "react";
import { useState, useEffect, useContext } from "react";

// import style
import { AppContainer } from "./components/styleComponents/AppContainer.style";
import { GlobalStyles } from "./components/styleComponents/GlobalStyles.style";
import { StyledNavbar } from "./components/styleComponents/Navbar.style";
import { StyledContainerImage } from "./components/styleComponents/ContainerImage.style";
import { StyledContainerResults } from "./components/styleComponents/ContainerResults.style";
import { StyledMyForm } from "./components/styleComponents/MyForm.style";

// import img from asset
import sfondoHome from "./assets/sfondoHome.jpg";

//import store
import { RecipesContext, RecipesProvider } from "./stores/RecipesContext";
import { Recipe } from "./components/Recipe";

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
  } = useContext(RecipesContext);

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
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#766042"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledContainerImage width="100%" height="auto">
        <img src={sfondoHome} alt="image plates of food" />
      </StyledContainerImage>
      <StyledMyForm></StyledMyForm>

      <StyledContainerResults
        width="90%"
        height="auto"
        marginTop="60px"
        paddingBottom="60px"
      >
        {query && <h3>You searched for recipes with: {query}</h3>}

        {recipes && recipes.length > 0
          ? recipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                image={recipe.image}
                key={recipe.id}
                id={recipe.id}
              />
            ))
          : ""}
      </StyledContainerResults>
    </AppContainer>
  );
}

export default App;
