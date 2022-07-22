import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
/*
const ValidatorApp = () => {
  const maxLen = (value) => value.length < 20;
  const name = useInput("Mr. ", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};
export default ValidatorApp;
// can write {...name} instead of value={name.value}
*/
