import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {Button, TextField} from "@material-ui/core";
import Context from "../context/Context";
import WatchListItem from "./WatchListItem";
import {buttonStyle} from "../constants"
import {AddEpisodeButtonWrapper, FormWrapper} from "./WatchListItemStyled";
import {ItemPageWrapper} from "../characters/ItemsListStyled";
import List from "@material-ui/core/List";
import {v4 as uuidv4} from "uuid";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));



export default function WatchList() {

    const {
        onTodoCreate,
        todos,
    } = useContext(Context)

    useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(null);

    const onCreate = () => {
        if (title.trim().length !== 0) {
            onTodoCreate({
                id: uuidv4(),
                title: title,
                complited: false,
            });
            setTitle("");
        } else {
            setTitleError("Not valid text");
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setTitleError(null);
    };

    return (
        <ItemPageWrapper>
            <FormWrapper>
                <FormControl
                    className={classes.margin}
                >
                    <TextField
                        error={!!titleError}
                        id="demo-customized-textbox"
                        type='text'
                        placeholder='Enter Episode'
                        onChange={handleTitleChange}
                        value={title}
                        helperText={titleError || ""}
                    />
                </FormControl>

                <AddEpisodeButtonWrapper>
                    <Button
                        style={buttonStyle}
                        onClick={onCreate}
                    >
                        Add episode
                    </Button>
                </AddEpisodeButtonWrapper>
            </FormWrapper>
            <List dense className={classes.root}>
                {todos.map((episode, index) =>
                    <WatchListItem
                        episode={episode}
                        index={index}
                        key={episode.id}
                    />
                )
                }
            </List>
            <br/>

        </ItemPageWrapper>
    );
}