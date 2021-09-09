import React from 'react';
import {Link} from "react-router-dom";
import {NotFoundWrapper} from "../Not Found/NotFoundStyled";

function NotFound({text}) {
    return (
        <NotFoundWrapper>
            <Link to={'/'}>
                <span>{text}</span>
            </Link>
        </NotFoundWrapper>
    );
}

export default NotFound;