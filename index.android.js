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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 90, height: 90 }} >
              <Button title="ENTER START COUNTRY" color="green" />
          </View>
          <View style={{ width: 90, height: 90 }} >
              <Button title="ENTER END COUNTRY" color="red" />
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="All start/Stop" color="gainsboro" />
              </View>
          </View>
          <View style={{ width: 200, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ width: 70, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'brown'}} >
                  <Text style={styles.rightTimer}>
                    {0.15}
                  </Text>
                </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="All start/Stop" color="gainsboro" />
              </View>
          </View>
          <View style={{ width: 200, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ width: 70, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                  <Text style={styles.rightTimer}>
                    {1.52}
                  </Text>
                </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="D" color="gainsboro" />
              </View>
          </View>
          <View style={{ width: 200, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ width: 70, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                  <Text style={styles.rightTimer}>
                    {6.47}
                  </Text>
                </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="W" color="gainsboro" />
              </View>
          </View>
          <View style={{ width: 200, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'orange'}} >
                <Text style={styles.rightTimerDanger}>
                  {16.42}
                </Text>
              </View>
          </View>
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
  rightTimer: {
    textAlign: 'center',
    color: '#fff',
    padding: 5
  },
  rightTimerDanger: {
    textAlign: 'center',
    color: 'black',
    padding: 5
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
