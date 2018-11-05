import React from 'react';
import { LinearGradient } from 'expo';
import { RkButton, RkComponent, RkText, } from 'react-native-ui-kitten';

class GradientButton extends RkComponent {

    /* DO NOT REMOVE */
    componentName = 'GradientButton';

    /* DO NOT REMOVE */
    typeMapping = {
        button: {},
        gradient: {},
        text: {},
    };

    constructor() {
        super();
    }

    renderContent = (textStyle) => {
        const { text, children } = textStyle;
        const hasText = text === undefined;
        return hasText ? children : this.renderText(textStyle);
    };

    renderText = (textStyle) => {
        const { text } = textStyle;
        return <RkText style={textStyle}>{text}</RkText>;
    };

    render() {
        const { button, gradient, text: textStyle } = this.defineStyles();
        const { style, rkType, ...restProps } = this.props;
        console.log('defineStyles: ', this.defineStyles());
        const colors = this.props.colors || this.extractNonStyleValue(gradient, 'colors');
        return (
            <RkButton
                rkType='stretch'
                style={[ button, style ]}
                {...restProps}>
                <LinearGradient
                    colors={colors}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={[ gradient ]}>
                    {this.renderContent(textStyle)}
                </LinearGradient>
            </RkButton>
        );
    }
}

export default GradientButton;
