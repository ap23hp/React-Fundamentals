import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "SUBMIT_START":
      return { ...state, loading: true, error: null };

    case "SUBMIT_SUCCESS":
      return { ...state, loading: false };

    case "SUBMIT_ERROR":
      return { ...state, loading: false, error: action.error };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Form({ onSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "SUBMIT_START" });

    // send data to App
    onSubmit({ name: state.name, email: state.email });

    dispatch({ type: "SUBMIT_SUCCESS" });
    dispatch({ type: "RESET" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
        type="text"
      />

      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />

      <button type="submit" disabled={state.loading}>
        {state.loading ? "Submitting..." : "Submit"}
      </button>

      {state.error && <p>{state.error}</p>}
    </form>
  );
}
