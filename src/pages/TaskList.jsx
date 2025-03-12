
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
      <h2>Tarefas Pendentes ({pendingTasks.length})</h2>
      {pendingTasks.length === 0 ? (
        <p>Não há tarefas pendentes.</p>
      ) : (
        <div className="tasks">
          {pendingTasks.map((task, index) => (
  <TaskItem key={task.id || index} task={task} />
))}
        </div>
      )}

      <h2>Tarefas Concluídas ({completedTasks.length})</h2>
      {completedTasks.length === 0 ? (
        <p>Não há tarefas concluídas.</p>
      ) : (
        <div className="tasks completed">
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;