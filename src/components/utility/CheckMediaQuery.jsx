//function to check media queries

import { useState, useEffect } from "react";

//import store
import { RecipesContext } from "../../stores/RecipesContext";
import { useContext } from "react";

const CheckMediaQuery = () => {
  const { isMobile, setIsMobile } = useContext(RecipesContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    handleResize();

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [setIsMobile]);
};

export default CheckMediaQuery;
