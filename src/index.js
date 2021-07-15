import App from './components/App';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/redux-store.js';
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
    backgroundColors: {
        mainBackgroundColor: "#edeef0",
    },
});

theme.overrides = {
    MuiButton: {
        root: {
            backgroundColor: "#edeef0",
            '&:hover': {
                backgroundColor: "#dfe1e4",
            }
        }
    },
    MuiCheckbox: {
        root: {
            '&$checked': {
                color: green[600],
            },
        },
    }
}

theme.props = {
    MuiCheckbox: {
        color: "default",
    },
    MuiTextField: {
        fullWidth: true,
    },
    MuiButton: {
        fullWidth: true,
    }
}

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
</BrowserRouter>, document.getElementById('root'));