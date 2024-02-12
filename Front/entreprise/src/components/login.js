import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); // Utilisez useNavigate dans un composant fonctionnel

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  
    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:3000/", { mail, password });

            if (res.data === "exist") {
                navigate("/home", { state: { id: mail } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }
  
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
                <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
