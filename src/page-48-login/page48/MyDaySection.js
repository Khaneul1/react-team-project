import React, { useState } from 'react';
import './MyDaySection.css';

const MyDaySection = () => {
  const [dayInputs, setDayInputs] = useState({
    visitedPlace: '',
    metPeople: '',
    purchasedItems: '',
    expenses: '',
    todayNews: '',
  });

  const handleInputChange = (field, value) => {
    setDayInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('나의 하루 입력:', dayInputs);
  };

  return (
    <div className="my-day-section">
      <h3 className="my-day-title">나의 하루</h3>
      <div className="my-day-table">
        <div className="row">
          <span>방문한 장소</span>
          <input
            type="text"
            value={dayInputs.visitedPlace}
            onChange={(e) => handleInputChange('visitedPlace', e.target.value)}
          />
          <span>오늘 만난 사람</span>
          <input
            type="text"
            value={dayInputs.metPeople}
            onChange={(e) => handleInputChange('metPeople', e.target.value)}
          />
        </div>
        <div className="row">
          <span>구입한 물건</span>
          <input
            type="text"
            value={dayInputs.purchasedItems}
            onChange={(e) =>
              handleInputChange('purchasedItems', e.target.value)
            }
          />
          <span>지출 금액</span>
          <input
            type="text"
            value={dayInputs.expenses}
            onChange={(e) => handleInputChange('expenses', e.target.value)}
          />
        </div>
        <div className="row">
          <span>오늘의 뉴스</span>
          <input
            type="text"
            value={dayInputs.todayNews}
            onChange={(e) => handleInputChange('todayNews', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyDaySection;
