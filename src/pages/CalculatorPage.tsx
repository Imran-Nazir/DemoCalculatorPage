import React, { useState } from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage: React.FC = () => {
  const [expression, setExpression] = useState<string>('');

  const handleInput = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <Calculator
        expression={expression}
        handleInput={handleInput}
        clearInput={clearInput}
        calculateResult={calculateResult}
      />
    </div>
    </>
  );
};

export default CalculatorPage;
