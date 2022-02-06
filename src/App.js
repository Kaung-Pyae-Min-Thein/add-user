import { useState } from "react";
import { Form_input, Item } from "./components";

function App() {
  const [info, setInfo] = useState([]);

  const addInfo = (inputObject) => {
    setInfo((prevArray) => {
      return [inputObject, ...prevArray];
    });
  };

  return (
    <div className="App">
      <Form_input addInfo={addInfo} />

      {info.map((item, index) => (
        <Item key={index} name={item.name} age={item.age} />
      ))}
    </div>
  );
}

export default App;
