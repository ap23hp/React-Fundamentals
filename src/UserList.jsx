export default function UserList({users, loading, error, query}){
    if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (query && users.length === 0) return <p>No users found</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}