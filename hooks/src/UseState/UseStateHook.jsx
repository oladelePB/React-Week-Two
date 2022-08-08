import React from "react";
import { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(5);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataTosend = {
        firstName: firstName,
        lastName: lastName,
        userAge: age,
        userEmail: email
    }
    console.log(dataTosend)
  };
  
  return (
    <div>
      <h1>Use State Demo</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={() => increment()}>Increment</button>

      <button onClick={() => decrement()}>Decrement</button>

      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label> Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label> Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />

        <div>
          <h3>First Name: {firstName}</h3>
          <h3>Last Name: {lastName}</h3>
          <h3>Age: {age}</h3>
          <h3>Email: {email}</h3>
        </div>
      </form>
    </div>
  );
};

export default UseStateHook;
