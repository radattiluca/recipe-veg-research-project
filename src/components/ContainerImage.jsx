//container component for the home image

import React from "react";

function ContainerImage({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default ContainerImage;
