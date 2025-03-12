
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, toggleTaskCompletion } = useContext(TaskContext);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="task-checkbox"
          />
          <h3 className="task-title">{task.title}</h3>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-meta">
          <span className="task-date">
            Criada em: {formatDate(task.createdAt)}
          </span>
          {task.updatedAt && (
            <span className="task-date">
              Atualizada em: {formatDate(task.updatedAt)}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <Link to={`/edit-task/${task.id}`} className="btn btn-edit">
          {console.log("TaskItem - task prop:", task)}
          Editar
        </Link>
        <button 
          onClick={() => {
            if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
              console.log("Excluindo task com ID:", task.id);
              removeTask(task.id);
          }
          }} 
          className="btn btn-delete"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskItem;