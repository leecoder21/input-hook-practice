import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameInputValid = enteredName.trim() !== "";
  const nameInputInvalid = !nameInputValid && nameInputTouched;

  const emailInputValid = enteredEmail.trim().includes("@");
  const emailInputInvalid = !emailInputValid && emailInputTouched;

  let formIsValid = false;

  if (nameInputValid && emailInputValid) {
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredName || !enteredEmail) return;
    setEnteredName("");
    setNameInputTouched(false);
    setEnteredEmail("");
    setEmailInputTouched(false);
  };

  const nameInputBlurHandler = (event) => {
    setNameInputTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEmailInputTouched(true);
  };

  const buttonClasses = nameInputInvalid ? "invalidBtn" : "";

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
