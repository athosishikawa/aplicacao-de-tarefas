
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Navbar from './pages/NavBar';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;