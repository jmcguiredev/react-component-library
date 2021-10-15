import React, { useState } from "react";
import TextInput from "./TextInput";

export default {
  title: "TextInput",
};

export const myComponent = () => {

    let [myVal, setMyVal] = useState("");

    let handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyVal(e.target.value);
    };
  return (
    <TextInput name="test" value={myVal} handleChange={handleTextChange} />
  );
};
