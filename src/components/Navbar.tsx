import React, { useState, useEffect } from 'react';

import '../styles/Navbar.module.css';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date): string => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formattedHours = hours.toString();
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <nav>
      <div>Navbar Content</div>
      {/*Searchbar*/}
      <div className="time">{formatTime(currentTime)}</div>
    </nav>
  );
};

export default Navbar;
