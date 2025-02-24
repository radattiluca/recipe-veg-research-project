import { useState, useEffect } from "react";

const CheckMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    setIsMobile(mediaQuery.matches);
  }, []);
};

export default CheckMediaQuery;
