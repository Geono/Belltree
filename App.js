import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/app';

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default App;
