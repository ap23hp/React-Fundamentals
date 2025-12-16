import { useState, useEffect } from "react";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      if (query === "") {
        setUsers([]);
        return;
      } else {
        try {
          setLoading(true);

          let api = await fetch("https://jsonplaceholder.typicode.com/users");
          let response = await api.json();

          let filteredUsers = response.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );
          setUsers(filteredUsers);
          setError(null);
        } catch (e) {
          console.log(e);
          setError("something went wrong");
        } finally {
          setLoading(false);
        }
      }
    }
    fetchApi();
  }, [query]);
  return (
    <>
      <input
        type="text"
        name="name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <h4>Loading............</h4>}
      {error && <p>{error}</p>}
      {query && users.length === 0 && !loading && (
  <p>No users found</p>
)}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
