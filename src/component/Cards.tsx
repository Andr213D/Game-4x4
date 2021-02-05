import React, { useState } from 'react';

import {makeStyles, Grid, CardMedia, Button, Box, Zoom,} from '@material-ui/core'
import card from "../assets/Card.png";
import dog from "../assets/img/dog.png";

const useStyles = makeStyles(theme =>({
    paper: {
        margin: 5,
        border: '1px solid',
        borderRadius: 5,
        color: '#999',
    },
    button: {
        cursor: 'active',
        '&:hover': {
            transform: 'scale(0.97)',
            transition: 'transform .2s',
        },
        height: 120,
        width: 80,
        background: '#FFF',
        borderRadius: 5,
    },
    content: {
        margin: 10,
        height: 90,
        width: 60,
    }
}));

export const Cards: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const [clicked, setClick] = useState(true);
    const handleClick = () => {setClick((prev) => !prev);};

    return (
        <div>
            <Grid  className={classes.paper}>
                <Box position='absolute' >
                    <CardMedia
                        className={classes.content}
                        component="img"
                        image={dog}
                        title="dog"
                    />
                </Box>
                <Zoom in={clicked}>
                    <Button
                        onClick={handleClick}
                        className={classes.button}>
                        <Box zIndex="tooltip">
                            <CardMedia
                                className={classes.button}
                                component="img"
                                image={card}
                                title="card"
                            />
                        </Box>
                    </Button>
                </Zoom>
            </Grid>
        </div>
    );
};
