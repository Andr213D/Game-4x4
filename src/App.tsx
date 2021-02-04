import React from 'react';

import {makeStyles, Box, Grid, Button} from '@material-ui/core'

import { Header } from './component/Header'

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
    paper: {
        height: 140,
        width: 100,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Box mx="auto" className={classes.wrapper}>
                <Box display="flex" justifyContent="center" p={1} >
                    <Button className={classes.buttonPlay}>
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
                        <Grid className={classes.paper}>

                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default App;
