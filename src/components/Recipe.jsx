import React from "react";
import { Link } from "react-router-dom";

export function Recipe({ title, image, id }) {
  return (
    <Link to={`/details/${id}`}>
      <div>
        <img src={image} alt="img of recipe" />
        <h2>{title}</h2>
        <button>Details</button>
      </div>
    </Link>
  );
}

//qui gestiamo la visualizzazione dei risultati, quindi tutto quello che appare dopo la ricerca tramite la barra di ricerca.
