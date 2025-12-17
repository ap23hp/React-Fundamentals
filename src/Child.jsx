import React from "react";
export default React.memo(function Child({ onSearch }) {
  console.log("Child rendered");
  return <button onClick={onSearch}>Search</button>;
});
