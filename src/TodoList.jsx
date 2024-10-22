import React, { useState } from 'react';

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">To-Do List</h2>

      {/* Add Task */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group mb-4">
        {filteredTasks.length ? (
          filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? 'list-group-item-success' : ''
              }`}
            >
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {task.text}
              </span>

              <div>
                {/* Complete Button */}
                <button
                  className={`btn btn-${task.completed ? 'secondary' : 'success'} btn-sm mx-1`}
                  onClick={() => handleCompleteTask(index)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>

                {/* Delete Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">
            No tasks available.
          </li>
        )}
      </ul>

      {/* Filter Options */}
      <div className="d-flex justify-content-center">
        <button
          className={`btn btn-${filter === 'all' ? 'primary' : 'outline-primary'} mx-2`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`btn btn-${filter === 'active' ? 'primary' : 'outline-primary'} mx-2`}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`btn btn-${filter === 'completed' ? 'primary' : 'outline-primary'} mx-2`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
