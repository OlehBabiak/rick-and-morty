import React from 'react';
import {urls} from "../../constants"
import {NavLink} from "react-router-dom";
import {DeskTopMenu, MobileMenu, NavigationContent} from "../HeaderStyled";
import {Menu, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";


function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavigationContent>
            <MobileMenu>
                <Button
                    style={{
                        color: 'floralwhite',
                        fontSize: '1em'
                    }}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        urls.map(item => (
                            <MenuItem
                                key={item.title}
                                onClick={handleClose}
                            >
                                <NavLink
                                    key={item.title}
                                    style={{margin: 'auto'}}
                                    to={item.url}
                                >{item.title}
                                </NavLink>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </MobileMenu>
            <DeskTopMenu>
                {
                    urls.map(item => (
                        <NavLink
                            key={item.title}
                            style={{margin: 'auto'}}
                            to={item.url}
                        >{item.title}</NavLink>
                    ))
                }
            </DeskTopMenu>
        </NavigationContent>
    );
}

export default Navigation;