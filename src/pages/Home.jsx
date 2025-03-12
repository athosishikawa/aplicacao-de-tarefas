
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../pages/TaskList';

const Home = () => {
  const { tasks } = useContext(TaskContext);
  
  return (
    <div className="home-page">
      <div className="header">
        <h1>Gerenciador de Tarefas</h1>
        <Link to="/add-task" className="btn btn-primary">
          Nova Tarefa
        </Link>
      </div>
      
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>Você não tem tarefas. Clique em "Nova Tarefa" para começar.</p>
        </div>
      ) : (
        <TaskList />
      )}
    </div>
  );
};

export default Home;