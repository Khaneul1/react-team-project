import React, { useState } from 'react';
import './MyDaySection.css';
import TimeEntry from './TimeEntry';

const MyDaySection = () => {
  const [dayInputs, setDayInputs] = useState({
    visitedPlace: '',
    metPeople: '',
    purchasedItems: '',
    expenses: '',
    todayNews: '',
    tasks: {
      '오전 5시~8시': '',
      '오전 8시~12시': '',
      '오후 12시~5시': '',
      '오후 5시~10시': '',
    },
  });

  const handleInputChange = (field, value) => {
    setDayInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTaskChange = (time, value) => {
    setDayInputs((prev) => ({
      ...prev,
      tasks: {
        ...prev.tasks,
        [time]: value,
      },
    }));
  };

  return (
    <div className="my-day-section">
      <h3 className="my-day-title">나의 하루</h3>
      <div className="my-day-table">
        <div className="row">
          <span>방문한 장소</span>
          <textarea
            type="text"
            value={dayInputs.visitedPlace}
            onChange={(e) => handleInputChange('visitedPlace', e.target.value)}
            className="my-day-input-box"
          />
          <span className="diary-met-people">오늘 만난 사람</span>
          <textarea
            type="text"
            value={dayInputs.metPeople}
            onChange={(e) => handleInputChange('metPeople', e.target.value)}
            className="my-day-input-box"
          />
        </div>
        <div className="row">
          <span>구입한 물건</span>
          <textarea
            type="text"
            value={dayInputs.purchasedItems}
            onChange={(e) =>
              handleInputChange('purchasedItems', e.target.value)
            }
            className="my-day-input-box"
          />
          <span className="diary-expenses">지출 금액</span>
          <textarea
            type="text"
            value={dayInputs.expenses}
            onChange={(e) => handleInputChange('expenses', e.target.value)}
            className="my-day-input-box"
          />
        </div>
        <div className="row">
          <span>오늘의 뉴스</span>
          <textarea
            type="text"
            value={dayInputs.todayNews}
            onChange={(e) => handleInputChange('todayNews', e.target.value)}
            className="todayNews-input-box"
          />
        </div>

        <div className="tasks-section">
          <div className="row">
            <span className="time-header">시각</span>
            <span className="task-header">중요한 일</span>
          </div>
          {Object.entries(dayInputs.tasks).map(([time, task], index) => (
            <TimeEntry
              key={index}
              time={time}
              task={task}
              onChange={handleTaskChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDaySection;
