import React, { useState } from "react";
import "../styles/emailform.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      email,
    };

    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="email-form"
          label="email"
          placeholder="Enter your email here"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
    </form>
  );
}
