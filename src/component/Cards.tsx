import React from 'react';

import {makeStyles, Grid, CardMedia, Button, Box, Zoom,} from '@material-ui/core'
import card from "../assets/img/Card.png";

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
interface CardProps {
    id: number;
    image: string;
    name: string;
    types: number;
    shirtClick: boolean;
    onClickCard: any;
}
export const Cards: React.FC<CardProps> = ({
    id,
    image,
    name,
    types,
    shirtClick,
    onClickCard}: CardProps) :React.ReactElement => {

    const classes = useStyles();
    const onAddCard = () => {
        {const obj = {id, types, shirtClick}
            onClickCard(obj)}
    }
    const click = shirtClick
    return (
        <div >
            <Grid  className={classes.paper}>
                <Box position='absolute' >
                    <CardMedia
                        className={classes.content}
                        component="img"
                        key={id}
                        image={image}
                        title={name}
                    />
                </Box>
                <Zoom in={click}>
                    <Button
                        onClick={onAddCard}
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
