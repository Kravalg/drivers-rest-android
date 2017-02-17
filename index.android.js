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
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import LocalStorage from './android/class/LocalStorage';
import Geolocation from './android/class/Geolocation';
import SoundPlay from './android/class/SoundPlay';
import Country from './android/class/Country';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import * as Progress from 'react-native-progress';


/**
LocalStorage.set('@App:test', 'test');
let valuels = LocalStorage.get('@App:test').then((value) => {
  alert(value);
}).done();
**/

   
export default class DriversRest extends Component {
  constructor(props) {
    StatusBar.setHidden(true);
    super(props);
    this.state = {
       cca2:'',
       callingCode:1
    };
    
  }


  render() {
    return (
            // Position Geocoding
      <View style={styles.container}>       
           <StartWork/>
      <View style={{height: 1, borderTopWidth: 1, borderColor: 'gainsboro', marginBottom: 20, marginTop: 20}}></View>
       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center'}} >
            <TouchableOpacity>
                <View style={styles.imgBorderButton} >
                  <Image
                    style={styles.imgButton}
                    source={require('./img/buttonAll.jpeg')}
                  />
                </View>
            </TouchableOpacity>  
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200, height: 30}} >
                  <MovingBar/>             
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
            <TouchableOpacity>
              <View style={styles.imgBorderButton} >
                <Image
                  style={styles.imgButton}
                  source={require('./img/buttonDrive.jpeg')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200, height: 30}} >
                  <MovingBar/>
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
            <TouchableOpacity>
              <View style={styles.imgBorderButton} >
                <Image
                  style={styles.imgButton}
                  source={require('./img/buttonD.jpeg')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200, height: 30}} >
                  <MovingBar/>
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
            <TouchableOpacity>
              <View style={styles.imgBorderButton} >
                <Image
                  style={styles.imgButton}
                  source={require('./img/buttonW.jpeg')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}} >
              <View style={{ borderColor: 'white', borderWidth: 1, width: 200, height: 30}} >
                  <MovingBar/>
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
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer15}>
                    {15}
                  </Text>
              </View>
             </TouchableOpacity> 
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer15}>
                    {15}
                  </Text>
              </View>
             </TouchableOpacity> 
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'black', borderRadius: 5}} >
                <Text style={styles.footer15}>
                  {15}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center'}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'red', borderRadius: 30}} >
                  <Text style={styles.circleButton}>
                    {10}
                  </Text>
              </View>
             </TouchableOpacity> 
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'flex-end', alignItems: 'center', marginTop: 15}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'green'}} >
                <Text style={styles.toggleButton}>
                  {24}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer9}>
                    {9}
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'red', borderRadius: 5}} >
                  <Text style={styles.footer9}>
                    {9}
                  </Text>
              </View>
             </TouchableOpacity> 
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'aquamarine', borderWidth: 2, backgroundColor: 'black', borderRadius: 5}} >
                <Text style={styles.footer9}>
                  {9}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: 'black', borderRadius: 30}} >
                <Text style={styles.circleButton}>
                  {10}
                </Text>
              </View>
             </TouchableOpacity> 
          </View>
          <View style={{ flex: 0.2 , justifyContent: 'flex-start', alignItems: 'center'}} >
            <TouchableOpacity>
              <View style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'black'}} >
                <Text style={styles.toggleButton}>
                  {45}
                </Text>
              </View>
             </TouchableOpacity> 
          </View>
        </View>

      </View>
    );
  }

 startButton(){ alert('hi bro!')}

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
    fontWeight: 'bold',
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rightTimer: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding: 5
  },
  rightTimerDanger: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    padding: 5
  },
  startButton: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5
  },
  endButton: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
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
  imgButton: {
    width: 65,
    height: 65
  },
  imgBorderButton: {
      borderWidth: 2,
      borderColor: 'grey',
      backgroundColor: 'gainsboro',
      margin: 2
  },
  startButtonOn: {
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 5
  },
  mi: {
    top: -100
  }

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
     return <Progress.Bar progress={this.state.progress} width={200} height={30} color={['green']}  />;
 }



});

var StartWork = React.createClass({
 getInitialState: function () {
    return { toggle: false,  titleText: 'ENTER \n START \n COUNTRY ', country: null, cca2:'',
       callingCode:1,titleTextEnd: 'ENTER \n END \n COUNTRY ', };
  },
   
  onClick: function(){

    Geolocation.getNameCountry().then( result => {
        this.setState({
                country: result 
              });
      });  

    this.setState({
          toggle: !this.state.toggle,  
          titleText: 'ENTER \n START \n COUNTRY',
          titleTextEnd: 'ENTER \n END \n COUNTRY:  ',
          //sound: SoundPlay.playShortSound('pip.mp3', 3000)
          mode: this.countryPicker.openModal()
          

      })
  },
  clickColor: function(){
      this.setState({
          toggle: !this.state.toggle,
          sound: SoundPlay.playShortSound('pip.mp3', 3000)
      })
  },
  render: function() {
    return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ width: 140 }} >    
               <View>
                 { this.state.country !== null ? 
                  <Text style={[styles.startButton]}>
                      {this.state.titleText}
                  </Text>:
                <TouchableOpacity onPress={ this.clickColor } >
                        <Text style={[styles.startButton, this.state.toggle && styles.startButtonOn]}>
                            {this.state.titleText}
                        </Text>                      
                </TouchableOpacity>
                }
              </View>                      
          </View>
           <View style={styles.mi} >    
                 <CountryPicker
                ref={(countryPicker) => { this.countryPicker = countryPicker; }}
                onChange={(value)=> this.setState({country: value, cca2: value.cca2})}
                cca2={this.state.cca2}
                translation='rus'
                closeable
              /> 
           </View>
          <View style={{ width: 140 }} >
             <View>
                 {this.state.toggle !== false || this.state.country ? 
                <TouchableOpacity onPress={ this.onClick}  >  
                        <Text style={this.state.toggle && this.state.country == null ? styles.startButtonOn : styles.startButton }>
                            {this.state.titleTextEnd+(this.state.country !== null ? JSON.stringify(this.state.cca2, null, 2) : '')}
                        </Text>
                </TouchableOpacity> : 
                    <Text style={[styles.startButton, this.state.toggle && styles.startButtonOn]}>
                        {this.state.titleTextEnd+(this.state.country !== null ? JSON.stringify(this.state.cca2, null, 2) : '')}
                    </Text> }
              </View>
          </View>
      </View>    
    );
  }
});





AppRegistry.registerComponent('DriversRest', () => DriversRest);

