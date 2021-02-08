import React, { useState } from 'react';

import {makeStyles, Grid, CardMedia, Button, Box, Zoom,} from '@material-ui/core'
import card from "../assets/img/Card.png";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme =>({
    paper: {
        margin: 20,
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
        height: 135,
        width: 100,
        background: '#FFF',
        borderRadius: 5,
    },
    content: {
        margin: 10,
        height: 120,
        width: 80,
        color: 'white',
    }
}));

export const Cards: (obj: {
    id: number;
    image: string;
    name: string;
    types: number }, onClickCard:{obj: {
        id: number;
        types: number;}})
    => React.ReactElement = (obj:{
    id: number;
    image: string;
    name: string;
    types: number; }, onClickCard:{obj: {
        id: number;
        types: number;}} )
    :
    React.ReactElement => {

    const dispatch = useDispatch()
    const onSelectHandleClick = () => {dispatch((handleClick))}

    const classes = useStyles();
    const [clicked, setClick] = useState(true);
    const handleClick = () => {setClick((prev:boolean) => !prev);};

    const onAddCard = () => {
        const obj = {
            id: {},
            types: {},
        }
    }

    return (
        <div>
            <Grid  className={classes.paper}>
                <Box position='absolute' >
                    <CardMedia
                        className={classes.content}
                        component="img"
                        key={obj.id}
                        image={obj.image}
                        title={obj.name}
                    />
                </Box>
                <Zoom in={clicked}>
                    <Button
                        onClick={onSelectHandleClick}
                        className={classes.button}>
                        <Box zIndex="tooltip">
                            <CardMedia
                                className={classes.button}
                                component="img"
                                image={card}
                                title='card'
                            />
                        </Box>
                    </Button>
                </Zoom>
            </Grid>
        </div>
    );
};
