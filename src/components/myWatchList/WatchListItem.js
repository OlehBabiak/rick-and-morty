import React, {memo, useContext} from 'react';
import {Button, Checkbox, ListItem} from "@material-ui/core";
import Context from "../context/Context";
import {ContentWrapper} from "./WatchListItemStyled";
import {buttonStyle} from "../constants"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import ListItemText from "@material-ui/core/ListItemText";

const WatchListItem = memo(({episode, index}) => {

    const [checkedWishListCheckbox, setCheckedWishListCheckbox] = React.useState(false);

    const {
        removeTodo,
        isDoneToggle
    } = useContext(Context)

    const handleChange = (event) => {
        onMarkIsDoneToggle(episode.id, checkedWishListCheckbox)
        setCheckedWishListCheckbox(event.target.checked)
    };

    const onTodoDelete = (arg) => {
        const answer = window.confirm('Are you sure?')
        if (answer) {
            removeTodo(arg)
        }
    }
    const onMarkIsDoneToggle = (arg, checkedWishListCheckbox) => {
        isDoneToggle(arg, checkedWishListCheckbox);
    }

    return (
        <ListItem
            key={index}
            button
            style={{
                margin: '5px auto',
                background: ''
            }}
        >
            {!episode.complited ?
                <ListItem key={index} button>
                    <ListItemText id={index} primary={episode.title}/>
                </ListItem>
                :
                <ContentWrapper>
                    <ListItem key={index} button>
                        <ListItemText id={index} primary={episode.title}/>
                    </ListItem>
                </ContentWrapper>
            }
            <ListItemSecondaryAction>
                <Button style={buttonStyle}
                        onClick={() => onTodoDelete(episode.id)}
                >
                    Delete episode
                </Button>
                <Checkbox
                    onChange={handleChange}
                    checked={checkedWishListCheckbox}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
})

export default WatchListItem;