import React from "react";
import { RecipesContext } from "../stores/RecipesContext";
import { useContext } from "react";
import { StyledContainerResults } from "./styleComponents/ContainerResults.style";
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
      <h2>{details.title || "Nessun titolo disponibile"}</h2>
      <img src={details.image || "placeolder.jpg"} alt="image foods" />

      <StyledContainerResults
        color="#8d5942"
        backgroundColor="#f1d2b6"
        padding="5px"
        marginBottom="20px"
        marginTop="20px"
        display="grid"
        gridTemplateColumns="auto auto"
        gap="10px"
      >
        <span> Vegetarian: {details.vegetarian === true ? "✅" : "❌"} </span>
        <span> Vegan: {details.vegan === true ? "✅" : "❌"} </span>
        <span>Sustainable {details.sustainable === true ? "✅" : "❌"}</span>
      </StyledContainerResults>

      <span>&#128337; Ready in: {details.readyInMinutes || "N/A"} min. </span>
      <span>🥙 x{details.servings || "N/A"} </span>

      <h4>PRESENTATION</h4>
      <p dangerouslySetInnerHTML={{ __html: safeHtmlSummary }}></p>
      {/* <p>{details.summary ? details.instructions : "Nessuna descrizione"}</p> */}

      <StyledContainerResults
        display="grid"
        gridTemplateColumns="auto"
        backgroundColor="#f1d2b6"
        padding="7px"
        marginBottom="30px"
        color="#8d5942"
      >
        {details.diets && details.diets.length > 0 ? (
          details.diets.map((diet, index) => <span key={index}>{diet} </span>)
        ) : (
          <span>Nessuna dieta specificata</span>
        )}
      </StyledContainerResults>

      <StyledContainerResults
        display="grid"
        gridTemplateColumns="auto"
        backgroundColor="#86a7a6"
        padding="7px"
        marginBottom="30px"
        color="#f1d2b6"
      >
        <span>PREPARE IT FOR</span>
        {details.occasions && details.occasions.length > 0 ? (
          details.occasions.map((occasion, index) => (
            <span key={index}>{occasion} </span>
          ))
        ) : (
          <span>No occasion specified</span>
        )}
      </StyledContainerResults>
      <StyledContainerResults padding="8px">
        <h4>PROCEDURE</h4>
        {safeHTML ? (
          <p dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
        ) : (
          <p>There are no specific instructions.</p>
        )}
      </StyledContainerResults>
    </div>
  );
}

export default CardRecipeDetails;

//qui gestiamo la visualizzazione della card con i dettagli della ricetta cliccata
