/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    const response = await api.post('login', data);

    localStorage.setItem('token', response.data.token);
    history.push('/tasks');
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <p>Faça seu login para prosseguir</p>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="email"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button">Login</button>
          <Link to="/register">
            <button className="button">Cadastro</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
