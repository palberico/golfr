import React, { Component } from 'react';
import { 
  StyleSheet, 
  ImageBackground, 
  Dimensions, 
} from 'react-native';

class Splash extends React.Component {

  componentWillMount () {
      setInterval(()=>{
        this.props.navigation.navigate('home');
      })
  }

  render() {
    return (
          <ImageBackground 
            source={require('../images/Golfr.jpg')}
            style={styles.backGround}
        >   
        </ImageBackground> 
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backGround: {
    width: deviceX,
    height: deviceY,
  },
});

export default Splash;