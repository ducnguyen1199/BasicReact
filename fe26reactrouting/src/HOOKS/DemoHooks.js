import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function DemoHooks() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const hanldeTangSo = () => {
    setNumber(number + 1);
  };

  const showNumber = () => {
    console.log(number);
  };

  const showNumberCallBack = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };
  const memoNumber = useMemo(() => numberUp(), []);

  return (
    <div>
      <button className="btn btn-success" onClick={hanldeTangSo}>
        Tăng số
      </button>
      <h3>Number: {number}</h3>
      <Child showNumber={showNumberCallBack} />
      <h3>Numberup: {memoNumber}</h3>
    </div>
  );
}
