import React, { useState } from 'react';

import './MyDiaryPage.css';
import DiaryInput from './DiaryInput';
import WeatherSelector from '../WeatherSelector';
import MyDaySection from './MyDaySection';

//1. 날짜 입력 및 날씨 선택 >> 현 날짜 및 날씨 정보와 동일한지 확인
//2. 불일치 >> 오류 메시지 + 입력 필드 리셋 + 현 날짜 및 날씨 정보 렌더링
//3. 일치할 경우 정답 메시지 + 현 날짜 및 날씨 정보 렌더링

//4. title: 나의 하루 / subTitle: 방문한 장소, 오늘 만난 사람, 구입한 물건, 지출 금액, 오늘의 뉴스
//5. table처럼 만들기!! 각 subTitle 고정, 입력값은 text로

//6. title: 중요한 일 / subTitle: 시각(세부적으로 구분된 시간 기재) + 해당 시간대에 뭐 했는지
//7. 입력값 text, 이 또한 table 형식으로 제작

//8. title: 내일 계획 + 입력 필드

//9. 뇌 건강을 위한 생활 습관 랜덤 메시지 출력
//>> 여러 문장 객체에 담아두고, 새로고침 할 때마다 랜덤 출력되도록
//>> 소제목: '대뇌 활동을 열심히 합시다' + 이에 해당하는 문구
const MyDiaryPage = () => {
  const [dateInput, setDateInput] = useState({
    year: '',
    month: '',
    day: '',
    weekday: '',
  });
  const [selectedWeather, setSelectedWeather] = useState('');
  const [correctDate, setCorrectDate] = useState(new Date());

  const resetInputs = () => {
    const correctDateString = {
      year: correctDate.getFullYear(),
      month: correctDate.getMonth() + 1,
      day: correctDate.getDate(),
      weekday: ['일', '월', '화', '수', '목', '금', '토'][correctDate.getDay()],
    };

    setDateInput(correctDateString);
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const isCorrect =
      parseInt(dateInput.year, 10) === currentDate.getFullYear() &&
      parseInt(dateInput.month, 10) === currentDate.getMonth() + 1 &&
      parseInt(dateInput.day, 10) === currentDate.getDate() &&
      dateInput.weekday ===
        ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()];

    console.log('user input:', {
      year: dateInput.year,
      month: dateInput.month,
      day: dateInput.day,
      weekday: dateInput.weekday,
      weather: selectedWeather,
    });

    console.log('correct answer:', {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
      weekday: ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()],
    });

    if (!isCorrect) {
      alert('오답입니다!');
      resetInputs();
    } else {
      alert('정답입니다!');
    }
  };

  return (
    <div className="my-diary-page">
      <div className="diary-header">
        <h3>일기</h3>
        <div className="diary-user-input-section">
          <DiaryInput dateInput={dateInput} setDateInput={setDateInput} />
          <WeatherSelector
            selectedWeather={selectedWeather}
            setSelectedWeather={setSelectedWeather}
          />
          <button onClick={handleSubmit} className="diary-weather-submit-btn">
            등록
          </button>
        </div>
      </div>
      <MyDaySection />
    </div>
  );
};

export default MyDiaryPage;
