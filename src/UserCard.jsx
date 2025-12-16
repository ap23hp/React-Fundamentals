import { useContext } from "react";
import UserContext from "./UserContext.jsx";

export default function UserCard() {
  const user = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
        <h1>This is userCard</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}