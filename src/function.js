import React from "react";
import Button from "./button";
const Functions = ({ setNum, num }) => {
  console.log(setNum);

  //   INCREASE FUNCTION
  const increaseNum = () => {
    setNum(num + 1);
  };

  //   DECREASE FUNCTION
  const decreaseNum = () => {
    if (num === 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };
  const Zero = () => {
    setNum(0);
  };

  return (
    <div>
      <Button
        title="INCREASE"
        styleText="btn btn-success form-control m-2"
        action={increaseNum}
      />
      <Button
        title="DECREASE"
        styleText="btn btn-primary form-control m-2"
        action={decreaseNum}
      />
      <Button
        title="ZERO"
        styleText="btn btn-warning form-control m-2"
        action={Zero}
      />
    </div>
  );
};
export default Functions;
