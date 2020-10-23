import React, { useState } from "react";
import ReactDOM from "react-dom";

import Functions from "./function";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <Functions num={num} setNum={setNum} />
      <h2>{num}</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
