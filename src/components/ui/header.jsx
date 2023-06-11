import React from 'react'
import { useAuth } from '../../hooks/useAuth';

function Header(props) {
  const { user, setUser } = useAuth();
  return (
    user ?
      <>
        <h2>Welcome, {user.name}!</h2>
        <button onClick={() => setUser(null)} className="btn">Logout</button>
      </>
      :
      <button onClick={() => setUser({ name: "Max" })} className="btn">Login</button>
  );
};

export default Header;