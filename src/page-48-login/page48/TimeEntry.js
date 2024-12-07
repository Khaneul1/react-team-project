import React from 'react';

const TimeEntry = ({ time, task, onChange }) => {
  return (
    <div>
      <div className="row">
        <span className="time">{time}</span>
        <textarea
          type="text"
          value={task}
          onChange={(e) => onChange(time, e.target.value)}
        />
      </div>
    </div>
  );
};

export default TimeEntry;
