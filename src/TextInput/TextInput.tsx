import React from "react";

import { TextInputProps } from "./TextInput.types";

import "./TextInput.scss";

const TextInput: React.FC<TextInputProps> = ({
  name,
  id,
  value,
  handleChange,
  theme,
}) => (
  <div data-testid="TextInput" className="jm-textinput-component">
    <input
      type="text"
      name={name}
      id={id ? id : null}
      className="jm-textinput"
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default TextInput;
