//component that handles sending the request via user input

import React from "react";

//import store
import { useContext } from "react";
import { RecipesContext } from "../stores/RecipesContext";

//import style
import { StyledButtonSearch } from "./styleComponents/ButtonSearch.style";

function Form({ className, children }) {
  const { search, setSearch, setQuery } = useContext(RecipesContext);
  function changeInput(e) {
    setSearch(e.target.value);
  }
  function getSearch(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <form className={className} onSubmit={getSearch}>
      <div>
        <input
          type="text"
          placeholder="🍳 Enter an ingredient..."
          value={search}
          onChange={changeInput}
        />
        <StyledButtonSearch>Search</StyledButtonSearch>
      </div>
    </form>
  );
}

export default Form;
