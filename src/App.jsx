import { useState } from "react";
import Form from "./Form.jsx";
import UserContext from "./UserContext.jsx";
import UserCard from "./UserCard.jsx";
function App() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  function btnClick() {
    console.log("clicked");
    setDisplayValue(value);
    setValue("");
  }
  function valueGrab(e) {
    setValue(e.target.value);
  }
  function handleFormSubmit(userData) {
    setFormData(userData);
    console.log(userData);
  }
  return (
    <>
      <input type="text" value={value} onChange={valueGrab} />

      <button disabled={!value} onClick={btnClick}>
        Click here to see the Text
      </button>
      <p>text here :{displayValue}</p>
      <UserContext.Provider value={formData}>
        <Form onSubmit={handleFormSubmit} />
             <UserCard />
      </UserContext.Provider>
 
    </>
  );
}

export default App;
