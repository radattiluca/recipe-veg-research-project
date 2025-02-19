import React from "react";

function ContainerImage({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default ContainerImage;

//qui abbiamo il contenitore che conterrà l'immagine della ricetta ricevuta dalla richiesta API
