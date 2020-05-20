import React, { memo } from "react";

function Child() {
  console.log("Child");
  return <div>Demo child Component</div>;
}

export default memo(Child);
