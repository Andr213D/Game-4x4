import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import theme from './theme';
import './index.css';
import store from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();