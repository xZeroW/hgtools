import React, { useState } from 'react';

export default function DarkModeToggle() {

  const [darkMode, setDarkMode] = useState(false);

  return(
    <div className='custom-control custom-switch'>
      <input
        type='checkbox'
        className='custom-control-input'
        onClick={() => {setDarkMode(!darkMode); localStorage.setItem('darkmode', darkMode); console.log(localStorage.getItem('darkmode'));}}
        checked={JSON.parse(localStorage.getItem('darkmode'))}
        id='customSwitches'
        readOnly
      />
      <label className='custom-control-label' htmlFor='customSwitches'>
        Dark Mode
      </label>
    </div>
  );
}