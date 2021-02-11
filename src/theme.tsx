import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#000',
        },
        secondary: {
            main: '#FF0505',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#000',
        },
    },
    typography: {
        h1: {
            fontSize:48,
            fontFamily: 'Kelly Slab',
        },
        h2: {
            fontSize:36,
            fontFamily: 'Neucha',
            letterSpacing: 6,
        },
        h3: {
            fontSize:36,
            fontFamily: 'Neucha',
            letterSpacing: 6,
        },
    },
    spacing: 5,
});

export default theme;