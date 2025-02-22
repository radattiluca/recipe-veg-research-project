import React from "react";
import { Link } from "react-router-dom";

//import style
import {
  ContainerCards,
  ContainerLeft,
  ContainerRight,
  ContainerRowTitle,
  ImageRecipe,
} from "./styleComponents/ContainerResults.style";

export function Recipe({ title, image, id }) {
  return (
    <ContainerCards>
      <ContainerLeft>
        <ImageRecipe src={image} alt="img of recipe" />
      </ContainerLeft>
      <ContainerRight>
        <ContainerRowTitle>
          <Link to={`/details/${id}`}>
            <h2>{title}</h2>
          </Link>
        </ContainerRowTitle>
      </ContainerRight>
    </ContainerCards>
  );
}

//qui gestiamo la visualizzazione dei risultati, quindi tutto quello che appare dopo la ricerca tramite la barra di ricerca.
