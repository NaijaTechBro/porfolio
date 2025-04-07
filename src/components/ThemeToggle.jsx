
// components/ThemeToggle.jsx
import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      <ToggleThumb animate={{ x: theme === 'light' ? 0 : 26 }}>
        {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
      </ToggleThumb>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  width: 56px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.headline};
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 2px;
`;

const ToggleThumb = styled(motion.div)`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.headline};
`;

export default ThemeToggle;

