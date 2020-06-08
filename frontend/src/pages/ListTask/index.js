/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

export default function ListTask() {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem('token');

  async function handleDelete(id) {
    try {
      await api.delete(`task/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      alert('Erro ao deletar, tente novamente');
    }
  }

  useEffect(() => {
    api
      .get('task', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      });
  }, [token]);

  return (
    <div className="container">
      <header>
        <h1>TO DO</h1>

        <Link className="button" to="/create">
          Adicionar nova tarefa
        </Link>
      </header>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.content}</strong>
            <div>
              <Link to={`/tasks/${task._id}`}>
                <FiPlusCircle size={50} color="#3F88C5" />
              </Link>
              <button
                onClick={() => {
                  handleDelete(task._id);
                }}
              >
                <FiTrash2 size={50} color="#D72638" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
