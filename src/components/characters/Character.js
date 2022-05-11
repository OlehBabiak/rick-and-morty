import React, {memo} from 'react';
import {Link} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";

const Character = memo(({character}) => {

    const useStyles = makeStyles({
        root: {

            width: '260px'
        },
        media: {
            height: '60%',
        },
    });

    const classes = useStyles();

    return (
        <Card style={{position: "relative"}} className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                alt='This is character photo'
                image={character.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Name: {character.name ?? 'not defined'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Species: {character.species ?? 'not defined'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Gender: {character.gender ?? 'not defined'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Status: {character.status ?? 'not defined'}
                </Typography>
            </CardContent>
            <Link to={`/details/:${character.id}`}>
                <CardActions
                    style={{
                        position: "absolute",
                        bottom: '0px',
                        right: '0px'
                    }}>
                    <Button style={{
                        color: 'rgb(28,28,26)',
                        fontSize: 'small',
                        background: 'rgba(201,201,35,0.89)'
                    }}
                    >
                        See details
                    </Button>
                </CardActions>
            </Link>
        </Card>
    );
})

export default Character;