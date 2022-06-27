import React from 'react'
import { useNavigate } from 'react-router-dom';

import './ButtonLink.css';

const ButtonLink = ({text, link}) => {
    const navigate = useNavigate();

    return (
        <>
            <input type='button' onClick={() => link.charAt(0) == '/' ? navigate(link) : window.location = link} value={text} ></input>
        </>
            
    );
}

export default ButtonLink
