import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useHistory is replaced by useNavigate
import { TaskContext } from '../context/TaskContext';

const EditTask = () => {
  const { id } = useParams();
  const { tasks, editTask } = useContext(TaskContext); // Remove getTaskById, include tasks
  const navigate = useNavigate(); // useHistory is replaced by useNavigate

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Find the task directly from the tasks array in TaskContext
    const task = tasks.find(task => task.id === id);

    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setCompleted(task.completed);
    } else {
      navigate('/'); // Redirect to home if task is not found
    }
  }, [id, tasks, navigate]); // Removed getTaskById, added tasks and replaced history.push with navigate('/')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('O título da tarefa é obrigatório!');
      return;
    }

    editTask({
      id,
      title,
      description,
      completed,
      updatedAt: new Date().toISOString()
    });

    navigate('/'); // Replaced history.push with navigate('/')
  };

  return (
    <div className="edit-task">
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            className="form-control"
            rows="4"
          />
        </div>
        
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Concluída
          </label>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;