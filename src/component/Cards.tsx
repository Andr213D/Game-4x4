import React from 'react';

import makeStyles  from '@material-ui/styles/makeStyles'
import Grid        from '@material-ui/core/Grid'
import CardMedia   from '@material-ui/core/CardMedia'
import Button      from '@material-ui/core/Button'
import Box         from '@material-ui/core/Box'
import Zoom        from '@material-ui/core/Zoom'

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
        borderRadius: 5,
        margin: 5,
        height: 125,
        width: 90,
        color: 'white',
    }
}));
interface CardProps {
    id: number;
    image: string;
    name: string;
    types: number;
    shirtAddClick: any;
    shirtAddBlock: boolean;
    onClickCard: any;
}
export const Cards: React.FC<CardProps> = ({
    id,
    image,
    name,
    types,
    shirtAddClick,
    shirtAddBlock,
    onClickCard}: CardProps) :React.ReactElement => {

    const classes = useStyles();
    const onAddCard = () => {
        {const obj = {id, types }
            onClickCard(obj)}
    }
    const click = shirtAddClick
    console.log(shirtAddBlock)
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
                        disabled = {shirtAddBlock}
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
