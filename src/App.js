import './App.css';
import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import styled from 'styled-components';
import NavBar from './components/navBar.jsx';
import Wall from './components/wall.jsx';
import Create from './components/create.jsx';
import Info from './components/info.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {


  return (
    <div className = "App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Wall />} />
          <Route path="/create" element={<Create />} />
          <Route path="/info" element={<Info />} />
        </Routes>
    </div>
  );
}

export default App;
