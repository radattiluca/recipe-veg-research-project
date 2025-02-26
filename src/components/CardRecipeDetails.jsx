//here we manage the display of the card with the details of the selected recipe

import React from "react";

//import store
import { RecipesContext } from "../stores/RecipesContext";
import { useContext } from "react";

//import style
import { StyledContainerResults } from "./styleComponents/ContainerResults.style";
import {
  StyledCardRecipeDetails,
  StyledTitleRecipe,
  StyledContainerTitleImg,
  StyledInfoRecipe,
  StyledContainerIntolerances,
  StyledContainerSummary,
  StyledContainerListDiets,
  StyledContainerPreparation,
  StyledContainerOccasions,
  StyledImageRecipe,
} from "./styleComponents/CardRecipeDetails.style";
import {
  ContainerLoader,
  ContainerSpinner,
  LogoLoader,
} from "../components/styleComponents/AppContainer.style";

//import logo loading
import LogoEggLoading from "../assets/logoLoading.png";

import DOMPurify from "dompurify";

function CardRecipeDetails({ className, children }) {
  const { details, setDetails } = useContext(RecipesContext);
  const safeHTML = DOMPurify.sanitize(details.instructions || "");
  const safeHtmlSummary = DOMPurify.sanitize(details.summary || "");

  console.log("questo è details" + details);
  console.log(Object.keys(details).length);

  if (Object.keys(details).length === 0) {
    console.log("non ho ancora di dati pronti");
  }

  return (
    <div className={className}>
      {children}

      <StyledCardRecipeDetails>
        <StyledContainerTitleImg>
          <StyledTitleRecipe>
            {details.title || "Nessun titolo disponibile"}
          </StyledTitleRecipe>
          <StyledImageRecipe
            src={details.image || "placeolder.jpg"}
            alt="image foods"
          />
        </StyledContainerTitleImg>

        <StyledContainerIntolerances>
          <span>Vegetarian {details.vegetarian === true ? "✅" : "❌"} </span>
          <span> Vegan {details.vegan === true ? "✅" : "❌"} </span>
          <span>Sustainable {details.sustainable === true ? "✅" : "❌"}</span>
          <span>Gluten Free {details.glutenFree === true ? "✅" : "❌"}</span>
        </StyledContainerIntolerances>

        <StyledInfoRecipe>
          <span>
            &#128337; Ready in {details.readyInMinutes || "N/A"} min.{" "}
          </span>
          <span>🥙 x{details.servings || "N/A"} </span>
        </StyledInfoRecipe>

        <StyledContainerSummary>
          <h4>PRESENTATION 👨‍🍳</h4>
          <p dangerouslySetInnerHTML={{ __html: safeHtmlSummary }}></p>
        </StyledContainerSummary>

        <StyledContainerListDiets>
          <h4>ALSO INDICATED FOR 👌</h4>
          {details.diets && details.diets.length > 0 ? (
            details.diets.map((diet, index) => (
              <span key={index}>• {diet} </span>
            ))
          ) : (
            <span>Nessuna dieta specificata</span>
          )}
        </StyledContainerListDiets>

        {details.occasions && details.occasions.length > 0 && (
          <StyledContainerOccasions>
            <h4>SEASONALITY</h4>
            {details.occasions.map((occasion, index) => (
              <span key={index}>{occasion} </span>
            ))}
          </StyledContainerOccasions>
        )}

        <StyledContainerPreparation padding="8px">
          <h4>PROCEDURE 📚</h4>
          {safeHTML ? (
            <p dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
          ) : (
            <p>There are no specific instructions.</p>
          )}
        </StyledContainerPreparation>
      </StyledCardRecipeDetails>
    </div>
  );
}

export default CardRecipeDetails;
