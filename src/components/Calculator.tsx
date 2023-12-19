import React from 'react';

interface CalculatorProps {
  expression: string;
  handleInput: (value: string) => void;
  clearInput: () => void;
  calculateResult: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  expression,
  handleInput,
  clearInput,
  calculateResult,
}) => {
  const buttons = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    ['C', 0, '.', '+'],
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <input
        type="text"
        className="w-full p-2 mb-4 rounded-md"
        value={expression}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button className="col-span-3 bg-blue-500 text-white p-2 rounded-md" onClick={clearInput}>
          Clear
        </button>
        <button className="bg-yellow-500 text-white p-2 rounded-md" onClick={calculateResult}>
          =
        </button>
        {buttons.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((item, index) => (
              <button
                key={index}
                className="bg-gray-300 p-2 rounded-md"
                onClick={() => handleInput(item.toString())}
              >
                {item}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
