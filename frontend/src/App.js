import './App.css';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

//component
import UserProfile from './components/UserProfile'
import OrderPage from './pages/OrderPage'

function App() {



  return (
    <div >

      <Container style={{ width: 1200 }}>
        <Routes >

          <Route path="/" element={<OrderPage />} />

        </Routes>
      </Container>
    </div>

  );
}

export default App;
