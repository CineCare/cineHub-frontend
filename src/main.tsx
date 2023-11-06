import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from './pages/ComingSoon/ComingSoon.tsx';
import Error from './pages/Error/Error.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<ComingSoon />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
