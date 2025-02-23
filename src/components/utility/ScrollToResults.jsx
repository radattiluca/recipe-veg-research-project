import { useEffect, useRef } from "react";

const ScrollToResults = ({ scrollTrigger }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (scrollTrigger && targetRef.current) {
      // ✅ Controlla che targetRef.current esista
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("Scroll to results");
    }
  }, [scrollTrigger]); // Esegue lo scroll quando cambia scrollTrigger

  return <div ref={targetRef}></div>; // Elemento target per lo scroll
};

export default ScrollToResults;
