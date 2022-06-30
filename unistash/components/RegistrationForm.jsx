import { useState } from "react";

export default function RegistrationForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="field">
        <input
          className="input"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="field">
        <button type="submit" className="validButton">
          Create account!
        </button>
      </div>
    </form>
  );
}
