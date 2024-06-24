import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedPassword = 'your_hardcoded_password';

    if (password === hardcodedPassword) {
      localStorage.setItem('loggedIn', true);
      navigate('/protected');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
