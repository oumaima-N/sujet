import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();orif
    try {
      // Envoi des données d'inscription à votre API backend
      const response = await axios.post('/api/entreprise/signup', {
        mail,
        password,
        companyName,
        address,
        phone
      });
      console.log('Inscription réussie:', response.data);
      // Rediriger l'utilisateur vers une autre page ou afficher un message de succès
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Page d'inscription pour les entreprises</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Nom de l'entreprise" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="Numéro de téléphone" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default RegisterPage;
