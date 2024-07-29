import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onChangeValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email) {
      setError((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
    } else if (!form.email.includes("@") || !form.email.includes(".")) {
      setError((prevState) => ({
        ...prevState,
        email: "Không đúng format email",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (!form.password) {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
    } else if (form.password.length < 6) {
      setError((prevState) => ({
        ...prevState,
        password: "Password min is 6",
      }));
    } else {
      // Destructring, spread.
      setError((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Validate Login Form</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          name="email"
          onChange={onChangeValue}
          type="text"
          style={{ padding: 10 }}
          placeholder="email"
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          value={form.password}
          onChange={onChangeValue}
          name="password"
          type="password"
          style={{ padding: 10 }}
          placeholder="password"
        />
        {error.password && (
          <span style={{ color: "red" }}>{error.password}</span>
        )}
        <button
          type="submit"
          style={{ padding: 10, backgroundColor: "#50a7ff" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
