// TopBar.js

import React, { useState, useEffect } from 'react';
import {
  FaGlobeAmericas,
  FaCalendarDay,
  FaGraduationCap,
  FaBasketballBall,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const TopBar = ({ onFilterChange, onFilterReset, hasLiveGames }) => {
  const [theme, setTheme] = useState('light'); // default to light
  const [mounted, setMounted] = useState(false); // track client mount

  useEffect(() => {
    setMounted(true);

    // check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.dataset.theme = savedTheme;
    } else {
      // fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.body.dataset.theme = defaultTheme;
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.dataset.theme = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const handleToday = () => {
    onFilterChange('TODAY');
  };

  const handleLive = () => {
    onFilterChange('LIVE');
  };

  const handleCollege = () => {
    onFilterChange('CBB');
  }

  const handlePro = () => {
    onFilterChange('NBA');
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className="top-bar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left filter buttons */}
      <div className="filters" style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={onFilterReset} title="Show All">
          <FaGlobeAmericas />
        </button>
        <button onClick={handleToday} title="Today">
          <FaCalendarDay />
        </button>
        <button onClick={handleCollege} title="NCAAM">
          <FaGraduationCap />
        </button>
        <button onClick={handlePro} title="NBA">
          <FaBasketballBall />
        </button>
      </div>

      {/* Center live button (only if live games exist) */}
      <div className="live-button" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        {hasLiveGames && (
          <button
            onClick={handleLive}
            title="Live Now"
            style={{ fontWeight: 'bold', color: 'red' }}
          >
            Live!
          </button>
        )}
      </div>

      {/* Right theme toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme} title="Toggle Theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
