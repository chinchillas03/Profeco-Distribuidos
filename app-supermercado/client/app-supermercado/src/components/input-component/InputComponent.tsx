import React from 'react';
import './inputComponent.css';

interface InputComponentProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ label, value, onChange }) => {
  return (
    <div className="row text-center input-container">
      <input
        id="inputField"
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;