import { createContext, useState } from "react";

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [details, setDetails] = useState([]);
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        search,
        setSearch,
        query,
        setQuery,
        details,
        setDetails,
        extendNavbar,
        setExtendNavbar,
        scrollTrigger,
        setScrollTrigger,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
