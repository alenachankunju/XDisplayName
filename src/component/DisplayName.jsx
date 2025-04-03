import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const validateInput = (name) => {
    return /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/.test(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInput(firstName) || !validateInput(lastName)) {
      setError(
        "Invalid characters detected. Please use only letters, numbers, and special characters."
      );
      return;
    }
    setError("");
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      {fullName && (
        <div
          style={{ marginTop: "20px", fontSize: "1.2em", fontWeight: "bold" }}
        >
          Full Name: {fullName}
        </div>
      )}
    </div>
  );
};

export default DisplayName;
