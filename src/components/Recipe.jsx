import React from "react";
import { Link } from "react-router-dom";

//import style
import {
  ContainerCards,
  ContainerLeft,
  ContainerRight,
  ContainerRowButton,
  ContainerRowTitle,
  ImageRecipe,
  StyleButtonRecipe,
} from "./styleComponents/ContainerResults.style";

export function Recipe({ title, image, id }) {
  return (
    <ContainerCards>
      <ContainerLeft>
        <ImageRecipe src={image} alt="img of recipe" />
      </ContainerLeft>
      <ContainerRight>
        <ContainerRowTitle>
          <h2>{title}</h2>
        </ContainerRowTitle>
        <ContainerRowButton>
          <Link to={`/details/${id}`}>
            <StyleButtonRecipe>Details</StyleButtonRecipe>
          </Link>
        </ContainerRowButton>
      </ContainerRight>
    </ContainerCards>
  );
}

//qui gestiamo la visualizzazione dei risultati, quindi tutto quello che appare dopo la ricerca tramite la barra di ricerca.
