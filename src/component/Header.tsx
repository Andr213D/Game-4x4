import React from 'react';

import troikaGames from '../assets/img/3Games.png';

import makeStyles  from '@material-ui/styles/makeStyles'
import CardMedia   from '@material-ui/core/CardMedia'
import Box         from '@material-ui/core/Box'

const useStyles = makeStyles(theme =>({

    headerWrapper: {
        display: 'block',
        height: '50px',
        background: 'black',
        color: '#FFF',
        fontSize: 32,
    },
    gamesImg: {
        height: 35,
        width: 35,
    },
}));

export const Header: React.FC = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.headerWrapper}>
            <Box display="flex" >
                <Box flexGrow={1} alignItems="center" style={{marginLeft:'5%'}}>
                    4x4 Game
                </Box>
                <Box p={1} style={{marginRight:'5%'}}>
                    <Box className={classes.gamesImg}>
                        <CardMedia
                            component="img"
                            image={troikaGames}
                            title="Troika Games"
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};
