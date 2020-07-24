import React from 'react';
import 'typeface-roboto';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { orange } from '@material-ui/core/colors';

import Home from './screens/Home';

const theme = createMuiTheme({
    palette: {
        primary: orange
    }
});

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Home />
                </Router>
            </ThemeProvider>
        )
    }
}

export default App;