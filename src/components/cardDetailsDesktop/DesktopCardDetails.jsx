//component for displaying the recipe details card with laptop layout and 4k

//import store
import { RecipesContext } from "../../stores/RecipesContext";
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
} from "./DesktopCardDetails.style";

//import libraries
import DOMPurify from "dompurify";

function ContainerCardDesktop({ className, children }) {
  const { details } = useContext(RecipesContext);
  const safeHTML = DOMPurify.sanitize(details.instructions);
  const safeHtmlSummary = DOMPurify.sanitize(details.summary);

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
          </StyleContainerRightCard>
        </StyleContainerTop>
        {details.occasions && details.occasions.length > 0 && (
          <StyledContainerOccasions>
            <h4>OCCASIONS 🥂</h4>
            {details.occasions.map((occasion, index) => (
              <span key={index}>{occasion} </span>
            ))}
          </StyledContainerOccasions>
        )}
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
