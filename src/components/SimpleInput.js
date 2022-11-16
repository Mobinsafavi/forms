import { useState } from "react";
import useFormInput from "../hook/UseFormInput";
const SimpleInput = (props) => {
  const {
    inputValue: nameInput,
    InputIsValid: nameInputIsValid,
    inputError: nameInputIsInvalid,
    inputHandlerOnChange: nameInputHandlerOnChange,
    InputHandlerOnBlur: nameInputHandlerOnBlur,
    reset: resetNameInput,
  } = useFormInput((value) => value.trim() !== "");

  const {
    inputValue: emailInput,
    InputIsValid: emailInputIsValid,
    inputError: emailInputIsInvalid,
    inputHandlerOnChange: emailInputHandlerOnChange,
    InputHandlerOnBlur: emailInputHandlerOnBlur,
    reset: resetemailInput,
  } = useFormInput((value) => value.includes("@"));

  let formSubmitIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formSubmitIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    resetNameInput();
    resetemailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={nameInputHandlerOnChange}
          onBlur={nameInputHandlerOnBlur}
        />
        {nameInputIsInvalid && <p>invalid input</p>}
      </div>
      <div className="form-control">
        <label htmlFor="emial">Your emial</label>
        <input
          type="emial"
          id="emial"
          value={emailInput}
          onChange={emailInputHandlerOnChange}
          onBlur={emailInputHandlerOnBlur}
        />
        {emailInputIsInvalid && <p>invalid input</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formSubmitIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
