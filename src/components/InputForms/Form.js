import React, { useState } from "react";

import styles from "./Form.module.css";

const InputForm = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  // username input change handler
  const userNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setenteredUserName(event.target.value);
  };
  // age input change handler
  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setenteredAge(event.target.value);
  };
  // form submit function
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check condition for empty inputs
    if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // send data to another component in form of object
    const data = {
      id: Math.random().toString(),
      username: enteredUserName,
      age: enteredAge,
    };
    props.onAddData(data);
    // after submitting data inputs must empty
    setenteredUserName("");
    setenteredAge("");
  };

  return (
    // form start
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input
        className={`${!isValid && styles.invalid}`}
        type="text"
        value={enteredUserName}
        onChange={userNameChangeHandler}
      />

      <label>Age</label>
      <input
        className={`${!isValid && styles.invalid}`}
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <input type="submit" value="Submit" />
    </form>
    // form end
  );
};

export default InputForm;
