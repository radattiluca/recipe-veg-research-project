import React from "react";

function ContainerResults({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default ContainerResults;

//qui abbiamo il contenitore che conterrà i risultati della ricetta ricevuti dalla richiesta API
