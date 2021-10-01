
import React from "react";

import { TextInputProps } from "./TextInput.types";

import "./TextInput.scss";

const TextInput: React.FC<TextInputProps> = ({}) => (
    <div data-testid="TextInput" className="jm-textinput-component"></div>
);

export default TextInput;

