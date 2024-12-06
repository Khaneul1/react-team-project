import React, { useState } from 'react';
import DateWeatherInput from './DateWeatherInput';
import './MyDiaryPage.css';

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
  const getCurrentDateInfo = () => {
    const date = new Date();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

    return {
      year: date.getFullYear().toString(),
      month: (date.getMonth() + 1).toString().padStart(2, '0'),
      day: date.getDate().toString().padStart(2, '0'),
      weekday: weekdays[date.getDay()],
      weather: 'Sunny',
    };
  };

  const [userInput, setUserInput] = useState({
    year: '',
    month: '',
    day: '',
    weekday: '',
    weather: '',
  });

  const [correctAnswer] = useState(getCurrentDateInfo());
  const [message, setMessage] = useState('');

  const validateInput = (input) => {
    const isCorrect =
      input.year === correctAnswer.year &&
      input.month === correctAnswer.month &&
      input.day === correctAnswer.day &&
      input.weekday === correctAnswer.weekday &&
      input.weather === correctAnswer.weather;

    if (isCorrect) {
      setMessage('정답입니다!');
    } else {
      setMessage('오답입니다!');
      setUserInput(correctAnswer);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInput = { ...userInput, [name]: value };
    setUserInput(updatedInput);
    validateInput(updatedInput);
  };

  return (
    <div className="my-diary-page">
      <h3 className="diary-title-text">일기</h3>
      <div>
        <DateWeatherInput
          userInput={userInput}
          setUserInput={setUserInput}
          handleChange={handleChange}
        />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default MyDiaryPage;
