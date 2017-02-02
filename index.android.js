/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//<<<<<<< HEAD
//=======

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import LocalStorage from './android/class/LocalStorage';

/**
LocalStorage.set('@App:test', 'test');
let valuels = LocalStorage.get('@App:test').then((value) => {
  alert(value);
}).done();
**/

export default class DriversRest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 140 }} >
              <Text style={styles.startButton}>
                ENTER {'\n'}
                START {'\n'}
                COUNTRY
              </Text>
          </View>
          <View style={{ width: 140 }} >
              <Text style={styles.endButton}>
                  ENTER {'\n'}
                  END {'\n'}
                  COUNTRY
              </Text>
          </View>
        </View>

        <View style={{height: 1, borderTopWidth: 1, borderColor: 'gainsboro', marginBottom: 20, marginTop: 20}}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="All start/Stop" color="gainsboro" />
              </View>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ flex: 0.2, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'brown'}} >
                  <Text style={styles.rightTimer}>
                    {0.15}
                  </Text>
                </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="All start/Stop" color="gainsboro" />
              </View>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ flex: 0.2, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                  <Text style={styles.rightTimer}>
                    {1.52}
                  </Text>
              </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="D" color="gainsboro" />
              </View>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ flex: 0.2, height: 65, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                  <Text style={styles.rightTimer}>
                    {6.47}
                  </Text>
                </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 70, height: 70 }} >
                <Button title="W" color="gainsboro" />
              </View>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200}} >
                  <MovingBar
                      color={'green'} styleAttr="Horizontal" indeterminate={false} />
              </View>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ width: 50, borderColor: 'white', borderWidth: 1, backgroundColor: 'orange'}} >
                <Text style={styles.rightTimerDanger}>
                  {16.42}
                </Text>
              </View>
          </View>
        </View>

        <View style={{height: 1, borderTopWidth: 1, borderColor: 'gainsboro', marginBottom: 20, marginTop: 20}}></View>

        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer15}>
                    {15}
                  </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer15}>
                    {15}
                  </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'black', borderRadius: 5}} >
                <Text style={styles.footer15}>
                  {15}
                </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 30}} >
                  <Text style={styles.circleButton}>
                    {10}
                  </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'flex-end', alignItems: 'center', marginTop: 15}} >
              <View style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                <Text style={styles.toggleButton}>
                  {24}
                </Text>
              </View>
          </View>
        </View>


        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer9}>
                    {9}
                  </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer9}>
                    {9}
                  </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'black', borderRadius: 5}} >
                <Text style={styles.footer9}>
                  {9}
                </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'black', borderRadius: 30}} >
                <Text style={styles.circleButton}>
                  {10}
                </Text>
              </View>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'flex-start', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'black'}} >
                <Text style={styles.toggleButton}>
                  {45}
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
  startButton: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    padding: 5
  },
  endButton: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: 5
  },
  footer15: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  },
  footer9: {
    width: 50,
    color: 'aquamarine',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  },
  circleButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  },
  toggleButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15
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
//>>>>>>> 44992ec9a055df0c8cbc2b3b95d2e73704aeef52
