import { useState } from "react";

const useFormInput = (validationFunc) => {
  const [inputValue, setInputValue] = useState("");
  const [foucesInput, setFoucesInput] = useState(false);

  const InputIsValid = validationFunc(inputValue);
  const inputError = !InputIsValid && foucesInput;

  const inputHandlerOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const InputHandlerOnBlur = () => {
    setFoucesInput(true);
  };

  const reset = () => {
    setInputValue("");
    setFoucesInput(false);
  };

  return {
    inputValue,
    InputIsValid,
    inputError,
    inputHandlerOnChange,
    InputHandlerOnBlur,
    reset,
  };
};

export default useFormInput;
