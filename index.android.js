/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


export default class DriversRest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={{ width: 100, height: 100 }} >
              <Button title="ENTER START COUNTRY" color="green" />
          </View>
          <View style={{ width: 100, height: 100 }} >
              <Button title="ENTER END COUNTRY" color="red" />
          </View>
        </View>
        <View style={{ borderColor: 'white', borderWidth: 1, width: 300}} >
            <MovingBar
                color={'green'}styleAttr="Horizontal" indeterminate={false} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});

var ProgressBar = require('ProgressBarAndroid');
var TimerMixin = require('react-timer-mixin');

var MovingBar = React.createClass({
 mixins: [TimerMixin],
 minutes: 10,
 getInitialState: function() {
     return {
        progress: 0
     };
 },
 getStep: function () {
    return 1 / (this.minutes * 60);
 },
 componentDidMount: function() {
     this.setInterval( () => {
         var progress = (this.state.progress + this.getStep()) % 1;
         this.setState({progress: progress});
     }, 1000 );
 },
 render: function() {
     return <ProgressBar
             progress={this.state.progress} {...this.props}
     />;
 }
});

AppRegistry.registerComponent('DriversRest', () => DriversRest);
