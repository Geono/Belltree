import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {RkTheme} from 'react-native-ui-kitten';
import Login from './screens/login';
import { AppLoading, Font, } from 'expo';
import { bootstrap } from './config/bootstrap';
import track from './config/analytics';
import { DarkKittenTheme } from './config/darkTheme';

bootstrap();

export default class App extends React.Component {
    state = {
        isLoaded: false,
    };

    componentWillMount() {
        this.loadAssets();
    }

    onNavigationStateChange = (previous, current) => {
        const screen = {
            current: this.getCurrentRouteName(current),
            previous: this.getCurrentRouteName(previous),
        };
        if (screen.previous !== screen.current) {
            track(screen.current);
        }
    };

    getCurrentRouteName = (navigation) => {
        const route = navigation.routes[ navigation.index ];
        return route.routes ? this.getCurrentRouteName(route) : route.routeName;
    };

    loadAssets = async () => {
        await Font.loadAsync({
            fontawesome: require('./assets/fonts/fontawesome.ttf'),
            icomoon: require('./assets/fonts/icomoon.ttf'),
            'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        });
        this.setState({ isLoaded: true });
    };

    renderLoading = () => (
        <AppLoading />
    );

    renderApp = () => (
        <View style={{ flex: 1 }}>
            <Login />
        </View>
    );

    render = () => (this.state.isLoaded ? this.renderApp() : this.renderLoading());
}

Expo.registerRootComponent(App);
