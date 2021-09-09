import React, {useContext} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import {Button} from "@material-ui/core";
import Context from "../context/Context";
import WatchListItem from "./WatchListItem";
import {buttonStyle} from "../constants"
import {AddEpisodeButtonWrapper, FormWrapper} from "./WatchListItemStyled";
import {ItemPageWrapper} from "../characters/ItemsListStyled";
import List from "@material-ui/core/List";

const BootstrapInput = withStyles((theme) => ({

    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

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
        onTodoChange,
        todoValues,
        onCreate,
        todos
    } = useContext(Context)

    const classes = useStyles();

    return (
        <ItemPageWrapper>
            <FormWrapper>
                <FormControl
                    className={classes.margin}
                >
                    <InputLabel htmlFor="demo-customized-textbox">Episode</InputLabel>
                    <BootstrapInput
                        id="demo-customized-textbox"
                        type='text'
                        placeholder='Enter Episode'
                        onChange={onTodoChange}
                        value={todoValues.title}
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