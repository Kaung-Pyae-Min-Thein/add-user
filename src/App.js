import React, { useState, useEffect } from "react";
import { Form_input, Item } from "./components";

function App() {
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({ users: [] });

  const addInfo = (inputObject) => {
    setInfo((prevArray) => {
      return [...prevArray, inputObject];
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then(
        (Userdata) => {
          setUserInfo({ users: Userdata });
        },
        (error) => {
          // console.log(error);
        }
      );
  }, []);
  const { users } = userInfo;

  return (
    <div className="App">
      <Form_input addInfo={addInfo} />

      {info.map((item, index) => (
        <Item key={index} name={item.name} age={item.age} />
      ))}

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
