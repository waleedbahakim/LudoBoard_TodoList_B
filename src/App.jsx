import React from 'react';
import { LudoBoard } from './LudoBoard';
import { TodoList } from './TodoList';  // Import the TodoList component

const App = () => {
  return (
    <div className="container my-4">
      {/* LudoBoard component */}
      <LudoBoard />

      {/* Horizontal line to separate sections */}
      <hr className="my-5" />

      {/* TodoList component */}
      <TodoList />
    </div>
  );
};

export default App;
