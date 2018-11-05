import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/app';
import { AppRegistry } from 'react-native';

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Belltree', () => App);

export default App;
