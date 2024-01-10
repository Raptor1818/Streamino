import React, { useState, useEffect } from 'react';

import '../styles/Navbar.module.css';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); //update interval

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <nav>
      <div>Navbar Content</div>
      <div className="time">{formatTime(currentTime)}</div>
    </nav>
  );
};

export default Navbar;
