import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState({ text: '', color: '' });

  const validate = (e) => {
    e.preventDefault();
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
    
    if (!isEmailValid) {
      setMsg({ text: "Invalid Email Format", color: "red" });
    } else if (formData.password.length < 6) {
      setMsg({ text: "Password must be 6+ characters", color: "red" });
    } else {
      setMsg({ text: "Login Successful!", color: "green" });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>MST1: Login Form</h2>
      <form onSubmit={validate} style={{ display: 'inline-block', textAlign: 'left' }}>
        <input type="text" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} /><br/><br/>
        <input type="password" placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} /><br/><br/>
        <button type="submit" style={{ width: '100%' }}>Login</button>
      </form>
      {msg.text && <p style={{ color: msg.color }}>{msg.text}</p>}
    </div>
  );
}

export default App;