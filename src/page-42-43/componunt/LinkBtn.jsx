import React from 'react';
import { Link } from 'react-router-dom'
const LinkBtn = ({ link, linkTitle }) => {
    return (
        <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
            <button>{linkTitle}</button>
        </Link>
    );
};

export default LinkBtn;