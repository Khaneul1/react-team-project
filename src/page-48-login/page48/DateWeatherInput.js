import React from 'react';
import './DateWeatherInput.css';

const DateWeatherInput = ({ userInput, handleChange }) => {
  return (
    <div className="set-user-date">
      <input
        type="text"
        name="year"
        value={userInput.year}
        onChange={handleChange}
      />
      <p>년</p>
      <input
        type="text"
        name="month"
        value={userInput.month}
        onChange={handleChange}
      />
      <p>월</p>
      <input
        type="text"
        name="day"
        value={userInput.day}
        onChange={handleChange}
      />
      <p>일</p>
      <input
        type="text"
        name="weekday"
        value={userInput.weekday}
        onChange={handleChange}
      />
      <p>요일</p>
    </div>
  );
};

export default DateWeatherInput;
