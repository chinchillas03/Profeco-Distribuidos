import React from 'react';

interface InputComponentProps {
  label: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ label }) => {
  return (
    <div className='row text-center'> 
      <input id="inputField" type="text" placeholder={label}/>
    </div>
  );
};

export default InputComponent;