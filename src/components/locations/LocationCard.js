import React, {memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 260,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const LocationCard = memo(({character}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name: {character.name}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Type: {character.type}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Dimension: {character.dimension}
                </Typography>
                <Typography variant="body2" component="p">
                    Created: {character.created}
                </Typography>
            </CardContent>
        </Card>
    );
})

export default LocationCard