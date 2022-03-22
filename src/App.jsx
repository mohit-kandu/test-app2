import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login"

function App() {
  const loggedIn = localStorage.getItem("user")
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={!loggedIn ? <Login /> : <Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
