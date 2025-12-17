import { useEffect, useState, useCallback,useMemo } from "react";
import Form from "./Form.jsx";
import UserContext from "./UserContext.jsx";
import UserCard from "./UserCard.jsx";
import { useApi } from "./hooks/useApi.jsx";
import UserSearch from "./UserSearch.jsx";
import Child from "./Child.jsx";

function expensiveCalculation(num) {
  console.log("Expensive calculation running...");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += num;
  }
  return total;
}


function App() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { data, loading, error } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);
  const handleSearch = useCallback(() => {
    console.log("Search clicked");
  }, []);
  // useEffect(() => {
  //   console.log("effect ran");
  // }, [count]);
   const result = useMemo(() => {
  return expensiveCalculation(number);
}, [number]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>{count}</h2>
      <h1>This is day 8</h1>
      <UserSearch />
      <h3>UseMemo and useCallback demo</h3>
      <Child onSearch={handleSearch} />
    </>
  );
}

export default App;
