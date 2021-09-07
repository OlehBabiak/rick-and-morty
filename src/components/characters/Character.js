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
    <Card className={classes.root}>
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
            <CardActions>
                <Button size="small" color="primary">
                    See details
                </Button>
            </CardActions>
        </Link>
    </Card>
    );
})

export default Character;