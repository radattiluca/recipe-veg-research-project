import React from "react";
import { RecipesContext } from "../stores/RecipesContext";
import { useContext } from "react";
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
} from "./styleComponents/CardRecipeDetails.style";
import DOMPurify from "dompurify";

function CardRecipeDetails({ className, children }) {
  const { details, setDetails } = useContext(RecipesContext);
  const safeHTML = DOMPurify.sanitize(details.instructions);
  const safeHtmlSummary = DOMPurify.sanitize(details.summary);
  if (!details) {
    return <p>Caricamento ricetta...</p>;
  }
  return (
    <div className={className}>
      {children}

      <StyledCardRecipeDetails>
        <StyledContainerTitleImg>
          <StyledTitleRecipe>
            {details.title || "Nessun titolo disponibile"}
          </StyledTitleRecipe>
          <img src={details.image || "placeolder.jpg"} alt="image foods" />
        </StyledContainerTitleImg>

        <StyledContainerIntolerances>
          <span> Vegetarian {details.vegetarian === true ? "✅" : "❌"} </span>
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
          {/* <p>{details.summary ? details.instructions : "Nessuna descrizione"}</p> */}
        </StyledContainerSummary>

        <StyledContainerListDiets>
          <h4>ALSO INDICATED FOR 👌</h4>
          {details.diets && details.diets.length > 0 ? (
            details.diets.map((diet, index) => (
              <span key={index}>•{diet} </span>
            ))
          ) : (
            <span>Nessuna dieta specificata</span>
          )}
        </StyledContainerListDiets>

        {details.occasions && details.occasions.length > 0 && (
          <StyledContainerOccasions>
            <h4>PREPARE IT FOR</h4>
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

//qui gestiamo la visualizzazione della card con i dettagli della ricetta cliccata
