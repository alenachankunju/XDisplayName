
import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    event.preventDefault()
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="lastName">LastName:</label>
        <input
          type="text"
          name="lastName"
          id="lstName"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>

        {fullName && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
};

export default DisplayName;