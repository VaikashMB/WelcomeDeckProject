import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTemplates from './components/EmployeeTemplates';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import WelcomeDeck from './components/WelcomeDeck';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='form' element={<EmployeeForm />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path='templates' element={<EmployeeTemplates />} />
          <Route path="/welcomeDeck/:empId" element={<WelcomeDeck />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
