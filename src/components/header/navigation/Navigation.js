import React from 'react';
import {urls} from "../../constants"
import {NavLink} from "react-router-dom";
function Navigation() {
    return (
        <div>
            {
                urls.map(item => (
                    <NavLink
                        key={item.title}
                        style={{margin: 'auto'}}
                        to={item.url}
                    >{item.title}</NavLink>
                ))
            }
        </div>
    );
}

export default Navigation;