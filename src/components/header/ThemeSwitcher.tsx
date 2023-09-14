import React, { useEffect, useState } from 'react';
import { LightMode } from '../../assets/LightMode';
import { DarkMode } from '../../assets/DarkMode';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const getDefaultTheme = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    if (defaultTheme === 'dark') {
      const htmlElement = document.querySelector('html');
      htmlElement?.classList.add('dark');
      localStorage.setItem('theme', defaultTheme);
    }
    setTheme(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    const htmlElement = document.querySelector('html');
    htmlElement?.classList.toggle('dark');
    localStorage.setItem('theme', updatedTheme);
    setTheme(updatedTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <LightMode className="w-[24px] fill-light lg:w-[32px]" />
      ) : (
        <DarkMode className="w-[24px] fill-dark lg:w-[32px]" />
      )}
    </button>
  );
};
