import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    valueIsValid: nameInputValid,
    valueInputInvalid: nameInputInvalid,
    valueInputHandler: nameInputHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: emailInputValid,
    valueInputInvalid: emailInputInvalid,
    valueInputHandler: emailInputHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (nameInputValid && emailInputValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredName) return;
    resetName();
    resetEmail();
  };

  const buttonClasses = formIsValid ? "" : "invalidBtn";

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputInvalid && <p>Name must not be empty.</p>}
      <div className="form-control">
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputInvalid && <p>Please enter valid e-mail.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} className={buttonClasses}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
