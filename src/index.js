import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ReduxStore from './Redux/store'
import './index.css';
import App from './Components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Edit Material-ui Theme here :
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#613C24',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <Provider store={ReduxStore}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

