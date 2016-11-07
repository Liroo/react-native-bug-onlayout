import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import Children from './Children';

export default class Parent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      animatedHeight: new Animated.Value(200),
    };
    this._measureContainer = this._measureContainer.bind(this);
  }

  render() {
    return (
      <Animated.View style={[{ backgroundColor: 'red', overflow: 'hidden', width: 150 }, this.state.animatedHeight && { height: this.state.animatedHeight }]}>
        <Animated.View
          onLayout={this._measureContainer}>
          <Children />
        </Animated.View>
      </Animated.View>
    );
  }

  _measureContainer({ nativeEvent }) {
    const { height } = nativeEvent.layout;
    this.setState({ animatedHeight: new Animated.Value(height) });
  }
}
