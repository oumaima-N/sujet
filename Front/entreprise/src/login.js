import './App.css';
import { Navbar, Container, Button, Table, Modal, Form } from "react-bootstrap";
import { useState } from 'react';

function LoginForm() {
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique de connexion à envoyer au backend
      console.log('Email:', mail, 'Mot de passe:', password);
    };
  
     return (
      
  
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={mail} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
      </form>
     );
  }
  
  export default LoginForm;
  