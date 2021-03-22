import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import makeStyles  from '@material-ui/styles/makeStyles'
import Grid        from '@material-ui/core/Grid'
import Button      from '@material-ui/core/Button'
import Box         from '@material-ui/core/Box'

import { Header } from './component/Header'
import { Cards } from './component/Cards'
import { CardsBlock } from './component/cardBlock'
import {setCards, setShirt} from "./store/card/actionCreators";
import {cardInterface} from "./store/rootReducer";

const useStyles = makeStyles(theme =>({
    root: {
        display: 'block',
    },
    wrapper: {
        background: '#C4C4C4',
        alignItems: 'center',
        width: 1000,
        height: 820,
    },
    content: {
        background: 'white',
    },
    buttonPlay: {
        fontSize: 22,
        letterSpacing: 20,
    },
    table:{
        background: '#A3A3A3',
        height: 700,
        width: 700,
    },
}));

function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(CardsBlock)

function App() {
    const dispatch = useDispatch()
    const handleAddCard = (obj: any) => {dispatch(setCards(obj));}
    const shirtCard = useSelector (( state: cardInterface ) => state.card)
    React.useEffect(() => {dispatch(setShirt())},
        [shirtCard.shirtDispatch])
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <Box mx="auto" className={classes.wrapper}>
                <Box display="flex" justifyContent="center" p={1} >
                    <Button className={classes.buttonPlay} >
                        Play
                    </Button>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1}  p={1}>
                        <Box>
                            Player 1
                        </Box>
                        <Box>Score: 0 </Box>
                    </Box>
                    <Box flexShrink={1} p={1}>
                        <Box>
                            Player 2
                        </Box>
                        <Box>Score: 0 </Box>
                    </Box>
                </Box>
                <Box position="relative" left="150px" bottom="40px">
                    <Box border={1}
                         borderColor="#626262"
                         borderRadius={10}
                         className={classes.table}>
                        <Box p={2}>
                            <Grid container
                                  direction="row"
                                  justify="space-evenly"
                                  alignItems="center">
                                {
                                    CardsBlock.map((obj: any) =>
                                        <Cards
                                            onClickCard = {handleAddCard}
                                            key={obj.id}
                                            //// @ts-ignore
                                            shirtAddClick = { shirtCard.items.shirtClick[obj.id] }
                                            { ...obj }
                                        />)
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default App;
