//component to manage scrolling towards the search results after submitting the form

import { useEffect, useRef } from "react";

const ScrollToResults = ({ scrollTrigger }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (scrollTrigger && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTrigger]);

  return <div ref={targetRef}></div>;
};

export default ScrollToResults;
