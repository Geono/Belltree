import React from 'react';
import { View } from 'react-native';
import {
  RkText,
  RkButton,
  RkComponent,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class SocialBar extends RkComponent {
  componentName = 'SocialBar';
  typeMapping = {
    container: {},
    section: {},
    icon: {},
    label: {},
  };
  static data = {
    likes: 18,
    comments: 26,
    shares: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || SocialBar.data.likes,
      comments: this.props.comments || SocialBar.data.comments,
      shares: this.props.shares || SocialBar.data.shares,
    };
  }

  onLikeButtonPressed = () => {
    const defaultCount = SocialBar.data.likes;
    this.setState(prevState => ({
      likes: prevState.likes === defaultCount ? prevState.likes + 1 : defaultCount
    }));
  };

  onCommentButtonPressed = () => {
    const defaultCount = SocialBar.data.comments;
    this.setState(prevState => ({
      comments: prevState.comments === defaultCount ? prevState.comments + 1 : defaultCount,
    }));
  };

  onShareButtonPressed = () => {
    const defaultCount = SocialBar.data.shares;
    this.setState(prevState => ({
      shares: prevState.shares === defaultCount ? prevState.shares + 1 : defaultCount,
    }));
  };

  render() {
    const {
      container, section, icon, label,
    } = this.defineStyles();

    const likes = this.state.likes + (this.props.showLabel ? ' Likes' : '');
    const comments = this.state.comments + (this.props.showLabel ? ' Comments' : '');
    const shares = this.state.shares + (this.props.showLabel ? ' Shares' : '');

    return (
      <View style={container}>
        <View style={section}>
          <RkButton rkType='clear' onPress={this.onLikeButtonPressed}>
            <RkText rkType='awesome primary' style={icon}>{FontAwesome.heart}</RkText>
            <RkText rkType='primary primary4' style={label}>{likes}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton rkType='clear' onPress={this.onCommentButtonPressed}>
            <RkText rkType='awesome hintColor' style={icon}>{FontAwesome.comment}</RkText>
            <RkText rkType='primary4 hintColor' style={label}>{comments}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton rkType='clear' onPress={this.onShareButtonPressed}>
            <RkText rkType='awesome hintColor' style={icon}>{FontAwesome.user}</RkText>
            <RkText rkType='primary4 hintColor' style={label}>{shares}</RkText>
          </RkButton>
        </View>
      </View>
    );
  }
}
