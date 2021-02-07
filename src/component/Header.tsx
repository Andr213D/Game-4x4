import React from 'react';

import troikaGames from '../assets/img/3Games.png';

import {makeStyles, Box, CardMedia,} from '@material-ui/core'

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





// },
// blackBarButton: {
//     cursor: 'pointer',
//         '&:hover': {
//         color: theme.palette.secondary.main,
//     },
//     fontSize: 18,
//         color: '#FFF',
//         margin: theme.spacing(1, 4),
//         letterSpacing: '3px',
// },
// cover: {
//     width: '100%',
//         height: '100%'
//
// },
// stoneButton:{
//     borderRadius: 30,
//         display: 'alignItems',
//         height: '25px',
//         width: '75px',
//         top: '1px',
// },


// export const Header: React.FC = (): React.ReactElement => {
//     const classes = useStyles();
//     return (
//         <Box position="relative" className={classes.headerWrapper} >
//     <Box zIndex="tooltip" display="flex" alignItems="center" className={classes.blackSide}>
//         <style>
//         @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
//     </style>
//     <Box fontSize={48} letterSpacing={4} lineHeight={1.0} flexGrow={1}>
//         Клуб го Адзи
//     </Box>
//     <Box flexGrow={2}  >
//     <Typography className={classes.blackBarButton}>
//     <Link component={RouterLink} to="/" href="#" className={classes.blackBarButton} >Главная</Link>
//         <Link component={RouterLink} to="/Events" href="#" className={classes.blackBarButton}>События</Link>
//         <Link component={RouterLink} to="/About_us" href="#" className={classes.blackBarButton}>О Hас</Link>
//     <Link component={RouterLink} to="/Contacts" href="#" className={classes.blackBarButton}>Контакты</Link>
//         <Link href="#" className={classes.blackBarButton}>Задачи</Link>
//         <Link href="#" className={classes.blackBarButton}>Играем</Link>
//         </Typography>
//         </Box >
//         <Box letterSpacing={3} >
//     <Link className={classes.blackBarButton} href="#" > Войти/Регистрация </Link>
//         </Box>
//         </Box>
//         <Box className={classes.whiteSide} zIndex="tooltip" fontWeight="fontWeightBold">
//         <style>
//         @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
//     </style>
//     <Box  textAlign="right" fontFamily='Lobster' fontSize={18} fontWeight={500} marginRight={2}>
//         Не бывает мертвых камней, бывает хорошее или плохое Адзи
//     </Box>
//     <Box>
//     <Button variant="contained" color="primary" className={classes.stoneButton}>
//         (¬‿¬)
//     </Button>
//     <Button variant="outlined" className={classes.stoneButton}>
//                         ┌(ಠ_ಠ)┘
//                     </Button>
//                     <Button variant="contained" color="primary" className={classes.stoneButton}>
//         (• ◡•)
//     </Button>
//     <Button variant="contained" color="primary" className={classes.stoneButton}>
//         (❍ᴥ❍ʋ)
//     </Button>
//     <Button variant="outlined" className={classes.stoneButton}>
//                         ⌐■_■
//                     </Button>
//                     <Button variant="outlined" className={classes.stoneButton}>
//                         ◕‿◕
//                     </Button>
//                     </Box>
//                     </Box>
//                     <Box style={{height: '10px', background: 'white',}}>
//     <Box
//         borderTop={2}
//     boxShadow={3}
//     />
//     </Box>
//     </Box>
// );
// };

