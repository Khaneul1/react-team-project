import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    wrapper: {
        display: 'inline-block',         // inline-block으로 만들어서 다른 요소와 같이 배치 가능하게 함
        padding: '10px 20px',            // 버튼 크기를 지정하는 패딩
        backgroundColor: '#007BFF',      // 배경색 (파란색)
        color: 'white',                  // 텍스트 색상 (흰색)
        textDecoration: 'none',          // 링크의 기본 밑줄 제거
        textAlign: 'center',             // 텍스트 정렬
        borderRadius: '5px',             // 둥근 테두리
        border: 'none',                  // 기본 테두리 제거
        cursor: 'pointer',              // 마우스 커서가 손 모양으로 변하도록 설정
        fontSize: '16px',                // 글자 크기
        transition: 'background-color 0.3s ease', // 배경색 변화 시 부드러운 전환 효과 추가
    },
    hover: {
        backgroundColor: '#0056b3',      // 마우스 오버 시 배경색 변경 (어두운 파랑)
    }
};

const LinkBtn = (props) => {
    return (
        <Link 
            to={props.link} 
            style={styles.wrapper} 
            onMouseEnter={e => e.target.style.backgroundColor = styles.hover.backgroundColor} 
            onMouseLeave={e => e.target.style.backgroundColor = styles.wrapper.backgroundColor}
        >
            다음페이지
        </Link>
    );
};

export default LinkBtn;
