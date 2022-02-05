import { useState } from "react";
import { Form_styles } from "./formstyles";

export const Form_input = ({ addInfo }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [warning, setWarning] = useState(false);

  const nameHandler = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const ageHandler = (e) => {
    const age = e.target.value;
    setAge(age);
  };

  const formClickHandler = (event) => {
    event.preventDefault();

    if (age > 0) {
      addInfo({ name, age });
    } else {
      setWarning(!warning);
    }
  };

  const warningHandler = (_) => {
    setWarning(!warning);
  };

  return (
    <Form_styles>
      <div className="wrapper">
        <form onSubmit={formClickHandler}>
          <input
            onChange={nameHandler}
            value={name}
            type="text"
            placeholder="Enter your name"
          />

          <input
            onChange={ageHandler}
            value={age}
            type="number"
            placeholder="Enter your age"
          />

          <button type="submit">Add</button>
        </form>
      </div>

      <div className={`warning ${warning && "active"}`}>
        <div className="warning_wrapper" onClick={warningHandler}></div>

        <div className="warning__div">
          <h3>Your age is less than 1. Try again. Your input is {age}.</h3>
          <button onClick={warningHandler}>OK</button>
        </div>
      </div>
    </Form_styles>
  );
};
