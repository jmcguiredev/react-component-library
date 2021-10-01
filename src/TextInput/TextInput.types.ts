import React from "react";

export interface TextInputProps {
    name: string;
    id?: string;
    value: string | number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    theme?: 'light' | 'dark';
}
