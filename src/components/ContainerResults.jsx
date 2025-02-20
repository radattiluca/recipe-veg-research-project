import React from "react";
import { useContext } from "react";
import { Recipe } from "./Recipe";

//import store
import { RecipesContext, RecipesProvider } from "../stores/RecipesContext";

function ContainerResults({ className, children }) {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className={className}>
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
    </div>
  );
}

export default ContainerResults;

//qui abbiamo il contenitore che conterrà i risultati della ricetta ricevuti dalla richiesta API
