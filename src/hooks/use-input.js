import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setValueTouched(true);
  };

  const valueIsValid = validateValue(enteredValue);
  const valueInputInvalid = !valueIsValid && valueTouched;

  const reset = () => {
    setEnteredValue("");
    setValueTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    valueInputInvalid,
    valueInputHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
