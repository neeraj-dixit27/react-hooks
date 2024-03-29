import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('username',username)
    setUser({
      username,
      password
    });
    
    setUsername("");
    setPassword("");
  };

  return (
   <div style={{textAlign: 'center'}}>
     <h2>Login</h2>
     <form style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
      <button type="submit">Login</button>
     </form>

     { user && JSON.stringify(user) }
   </div>
  )
}