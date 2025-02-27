//This page is the home of the site

import { useEffect, useContext } from "react";

//import utility
import ScrollToTop from "../../utility/ScrollToTop";
import ScrollToResults from "../../utility/ScrollToResults";

// import style
import {
  AppContainer,
  ContainerNumberResults,
  ContainerParagraph,
} from "./AppContainer.style";
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledNavbar } from "../navbar/Navbar.style";
import {
  StyledContainerImage,
  ImageHome,
} from "../containerImageApp/ContainerImage.style";
import { StyledContainerResults } from "../cardContainer/ContainerResults.style";
import { StyledMyForm } from "../formSearch/MyForm.style";
import { StyledFooter } from "../footer/Footer.style";

// import image home
import sfondoHome from "../../assets/image/sfondoHome.jpg";

//import store
import { RecipesContext } from "../../stores/RecipesContext";

//import libraries
import axios from "axios";

function App() {
  const mykey = import.meta.env.VITE_API_KEY;
  const mykey2 = import.meta.env.VITE_API_KEY2;

  // import states
  const {
    recipes,
    setRecipes,
    query,
    extendNavbar,
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
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${mykey2}&query=${query}&diet=vegetarian,vegan&addRecipeInformation=true`
      )
      .then((response) => {
        if (response.status !== 200) {
          alert("Oops something went wrong");
          throw new Error(
            `Request failed in fetchAuthors with status ${response.status}`
          );
        }
        const data = response.data;
        const resultRecipes = data.results;

        if (resultRecipes.length > 0) {
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
        console.error("Error fetching recipes:", error);
        alert("Oops something went wrong");
      });
  }

  return (
    <AppContainer>
      <ScrollToTop />
      <GlobalStyles />
      <StyledNavbar
        width="100%"
        extendNavbar={extendNavbar ? "300px" : "80px"}
        backgroundColor="#3e303f"
        display="flex"
        flexDirection="column"
      ></StyledNavbar>
      <StyledContainerImage>
        <ImageHome src={sfondoHome} alt="image plates of food" />
      </StyledContainerImage>
      <ContainerParagraph>
        <p>Welcome to our vegetarian recipe website!</p>
        <p>
          <span>Enter an ingredient</span> in the search bar or a dish,
          <span>for example pasta with zucchini</span>
        </p>
      </ContainerParagraph>

      <StyledMyForm></StyledMyForm>

      <ContainerParagraph>
        <p>
          Discover hundreds of delicious <span>vegetarian recipes!</span>
        </p>
        <p>
          <span>Search</span> for your <span>favorite dish</span> and follow the
          steps step by step to prepare it with <span>simplicity</span> and{" "}
          <span>taste</span>. 🌱🥗
        </p>
        <p>Make food your medicine and medicine your food 🌱</p>
      </ContainerParagraph>

      {query && (
        <ContainerNumberResults>
          <h3>
            <span>{recipes.length}</span> results for <span>{query}</span>
          </h3>
        </ContainerNumberResults>
      )}
      <div>
        <ScrollToResults scrollTrigger={scrollTrigger} />
      </div>
      {recipes && recipes.length > 0 && (
        <StyledContainerResults></StyledContainerResults>
      )}

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

export default App;
