/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

export default function CreateTask() {
  const [content, setContent] = useState('');

  const history = useHistory();
  const { id } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (id !== undefined) {
      api
        .get(`task/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setContent(response.data.content);
        });
    }
  }, [id, token]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      content,
    };

    if (id === undefined) {
      await api.post('task/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/tasks');
    } else {
      await api.put(`task/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/tasks');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <p>Crie ou edite uma tarefa</p>
          <Link to="/tasks" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Descreva a tarefa"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
