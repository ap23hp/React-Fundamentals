import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    async function fetchApi() {
      if (debouncedQuery === "") {
        setUsers([]);
        return;
      }

      try {
        setLoading(true);
        const api = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await api.json();

        const filteredUsers = response.filter((user) =>
          user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );

        setUsers(filteredUsers);
        setError(null);
      } catch (e) {
        setError("something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchApi();
  }, [debouncedQuery]);

  return (
    <>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />

      <UserList users={users} loading={loading} error={error} query={query} />
    </>
  );
}
