import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Switch from 'react-switch';

export default function ThemeSwitch(){

  function handleChange(theme) {
    theme.setTheme(theme.mode === 'dark' ? { mode:'light' } : { mode: 'dark' });
  }

  return(
    <ThemeConsumer>{theme => (
      <label>
        <Switch width={35} height={20} onChange={() => handleChange(theme)} checked={theme.mode === 'dark' ? true : false} />
        <span>Dark Mode</span>
      </label>
    )}
    </ThemeConsumer>
  );
}
//onClick={() => theme.setTheme(theme.mode === 'dark' ? { mode:'light' } : { mode: 'dark' })}