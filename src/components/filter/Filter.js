import React from 'react';
import {FormControl, InputBase, InputLabel, makeStyles, NativeSelect, withStyles} from "@material-ui/core";

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
        border: '1px solid rgba(201,201,35,0.89)',
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
            borderColor: 'rgba(201,201,35,0.89)',
            boxShadow: '0 0 0 0.2rem rgba(201,201,35,0.89)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function Filter(props) {
    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">select</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={props.select}
                    onChange={props.choice}
                    input={<BootstrapInput />}
                    style={{
                        background: 'white',
                        borderRadius: 4,
                    }}
                >
                    {props.filter.map(item=>
                        <option

                            value={item}
                        >{item}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>
        </>
    );
}

export default Filter;