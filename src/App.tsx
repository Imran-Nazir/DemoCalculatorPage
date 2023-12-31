import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />

      </Routes>
    </Router>
  );
};

export default App;
