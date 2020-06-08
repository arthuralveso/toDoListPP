/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      username,
      password,
    };

    await api.post('user', data);

    history.push('/login');
    alert('Cadastro realizado com sucesso');
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <p>Faça seu cadastro</p>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button">Enviar</button>
          <Link to="/" className="back-link">
            <button className="button">Voltar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
