import './App.css';
import { useState } from 'react';

function LoginForm() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique de connexion à envoyer au backend
      console.log('Email:', mail, 'Mot de passe:', password);
    };
  
     return (
      
  
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
      </form>
     );
  }
  
  export default LoginForm;
  
