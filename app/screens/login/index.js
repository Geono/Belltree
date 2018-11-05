import React from 'react';
import { Dimensions, Image, View, } from 'react-native';
import { RkButton, RkStyleSheet, RkText, RkTextInput, } from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import GradientButton from '../../components/gradientButton';
import { scaleModerate, scaleVertical } from '../../utils/scale';

const Login = () => {

    const imageSize = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - scaleModerate(375, 1)
    };

    return (
        <View style={styles.screen}>
            <Image
                style={[ styles.image, imageSize ]}
                source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}
            />
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <RkButton style={styles.button} rkType='social'>
                        <RkText rkType='awesome hero accentColor'>{FontAwesome.twitter}</RkText>
                    </RkButton>
                    <RkButton style={styles.button} rkType='social'>
                        <RkText rkType='awesome hero accentColor'>{FontAwesome.google}</RkText>
                    </RkButton>
                    <RkButton style={styles.button} rkType='social'>
                        <RkText rkType='awesome hero accentColor'>{FontAwesome.facebook}</RkText>
                    </RkButton>
                </View>
                <RkTextInput rkType='rounded' placeholder='Username' />
                <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry />
                <GradientButton
                    style={styles.save}
                    rkType='large'
                    onPress={() => console.log('login button pressed')}
                    text='LOGIN'
                />
                <View style={styles.footer}>
                    <View style={styles.textRow}>
                        <RkText rkType='primary3'>Don’t have an account?</RkText>
                        <RkButton rkType='clear'>
                            <RkText
                                rkType='header6'
                                style={{ marginLeft: 5 }}
                                onPress={() => console.log('sign in button pressed')}
                            >
                                Sign up now
                            </RkText>
                        </RkButton>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = RkStyleSheet.create(theme => ({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.screen.base,
    },
    image: {
        resizeMode: 'cover',
        marginBottom: scaleVertical(10),
    },
    container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1,
    },
    footer: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
    },
    button: {
        marginHorizontal: 14,
    },
    save: {
        marginVertical: 9,
    },
    textRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
}));

export default Login;
