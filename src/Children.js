import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Children extends Component {
  constructor() {
    super();
    this.state = {
      height: 200,
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: 'green', height: this.state.height, width: 150 }}>
        <TouchableHighlight onPress={() => this.setState({ height: this.state.height - 10 })}>
          <Text>Reduce height</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.setState({ height: this.state.height + 10 })}>
          <Text>Grow height</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
