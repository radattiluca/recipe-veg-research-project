//here the display of each individual recipe in the form of a card is managed

import React from "react";
import { Link } from "react-router-dom";

//import logo
import dairyFreeLogo from "../assets/dairyFreeLogo.png";
import glutenFreeLogo from "../assets/freeGlutenLogo.png";
import veganLogo from "../assets/veganLogo.png";

//import style
import {
  ContainerCards,
  ContainerLeft,
  ContainerRight,
  ContainerRowTitle,
  ImageRecipe,
  ContainerSymbols,
} from "./styleComponents/ContainerResults.style";

export function Recipe({ title, image, id, dairyFree, glutenFree, vegan }) {
  return (
    <Link to={`/details/${id}`}>
      <ContainerCards>
        <ContainerLeft>
          <ImageRecipe src={image} alt="img of recipe" />
        </ContainerLeft>
        <ContainerRight>
          <ContainerRowTitle>
            <h2>{title}</h2>
          </ContainerRowTitle>
          <ContainerSymbols>
            <span>
              {dairyFree ? <img src={dairyFreeLogo} alt="Dairy Free" /> : ""}
            </span>
            <span>
              {glutenFree ? <img src={glutenFreeLogo} alt="Gluten Free" /> : ""}
            </span>
            <span>{vegan ? <img src={veganLogo} alt="Vegan" /> : ""}</span>
          </ContainerSymbols>
        </ContainerRight>
      </ContainerCards>
    </Link>
  );
}
