
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid'; 


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim()) {
      const task = { 
          id: uuidv4(), 
          title: title,
          description: description,
          completed: false, 
          createdAt: new Date().toISOString(),
          updatedAt: null,
      };
      console.log("Dados da tarefa a serem passados para addTask:", task); 
      addTask(task); 
      setTitle('');
      setDescription('');
    } else {
        alert('Por favor, insira um título para a tarefa.');
    }
    navigate('/');
  };

  return (
    <div className="add-task">
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título da tarefa"
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição da tarefa (opcional)"
            className="form-control"
            rows="4"
          />
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;