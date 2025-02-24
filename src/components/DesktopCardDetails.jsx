import React from "react";
import { RecipesContext } from "../stores/RecipesContext";
import { useContext } from "react";

//import style
import {
  StyleDesktop,
  StyleContainerImage,
  StyleImage,
  StyleContainerTop,
  StyleContainerRightCard,
  StyledContainerTitle,
  StyledContainerIntolerances,
  StyledContainerInfoRecipe,
  StyledContainerOccasions,
  StyledContainerSummary,
  StyledContainerListDiets,
  StyledContainerPreparation,
} from "./styleComponents/DesktopCardDetails.style";

//import libraries
import DOMPurify from "dompurify";

function ContainerCardDesktop({ className, children }) {
  const { details, setDetails } = useContext(RecipesContext);
  const safeHTML = DOMPurify.sanitize(details.instructions);
  const safeHtmlSummary = DOMPurify.sanitize(details.summary);

  if (!details) {
    return <p>Caricamento ricetta...</p>;
  }

  return (
    <div className={className}>
      {children}
      <StyleDesktop>
        <StyleContainerTop>
          <StyleContainerImage>
            <StyleImage
              src={details.image || "placeolder.jpg"}
              alt="image foods"
            />
          </StyleContainerImage>
          <StyleContainerRightCard>
            <StyledContainerTitle>
              {details.title || "Nessun titolo disponibile"}
            </StyledContainerTitle>
            <StyledContainerIntolerances>
              <span>
                Vegetarian {details.vegetarian === true ? "✅" : "❌"}{" "}
              </span>
              <span> Vegan {details.vegan === true ? "✅" : "❌"} </span>
              <span>
                Sustainable {details.sustainable === true ? "✅" : "❌"}
              </span>
              <span>
                Gluten Free {details.glutenFree === true ? "✅" : "❌"}
              </span>
            </StyledContainerIntolerances>
            <StyledContainerInfoRecipe>
              <span>
                &#128337; Ready in {details.readyInMinutes || "N/A"} min.{" "}
              </span>
              <span>🥙 x{details.servings || "N/A"} </span>
            </StyledContainerInfoRecipe>
            {details.occasions && details.occasions.length > 0 && (
              <StyledContainerOccasions>
                <h4>SEASONALITY</h4>
                {details.occasions.map((occasion, index) => (
                  <span key={index}>{occasion} </span>
                ))}
              </StyledContainerOccasions>
            )}
          </StyleContainerRightCard>
        </StyleContainerTop>
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
        <StyledContainerPreparation>
          <h4>PROCEDURE 📚</h4>
          {safeHTML ? (
            <p dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
          ) : (
            <p>There are no specific instructions.</p>
          )}
        </StyledContainerPreparation>
      </StyleDesktop>
    </div>
  );
}

export default ContainerCardDesktop;
