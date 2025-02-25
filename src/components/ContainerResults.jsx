//component for displaying search results

import React from "react";

//import component
import { Recipe } from "./Recipe";

//import store
import { useContext } from "react";
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
