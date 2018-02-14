import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { Container, Content, Button } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
      <Content scrollEnabled={false}>
    <ImageBackground source={require('../images/Golfr.jpg')}
      style={styles.backGround}>
   
      <Button block style={styles.btn}>
              <Text style={styles.textBtn}>Organize</Text>
            </Button>

            <Button block style={styles.btn2}>
              <Text style={styles.textBtn}>Find Tournaments</Text>
            </Button>

            <Button block style={styles.btn3}>
              <Text style={styles.textBtn}>Find Leagues</Text>
            </Button>
         
    </ImageBackground>
    </Content>
  </Container>
    );
  }
}

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backGround: {
    width: deviceX,
    height: deviceY,
  },
  textBtn:{
    fontSize: 18,
    color: 'white',
  },
  btn: {
    marginTop: 300, // Figure out why alignItmes and justifyContent isn't working.
    // alignItems: 'center',
    // justifyContent: 'center',
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btn2: {
    marginTop: 75, // Figure out why alignItmes and justifyContent isn't working.
    // alignItems: 'center',
    // justifyContent: 'center',
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btn3: {
    marginTop: 10, // Figure out why alignItmes and justifyContent isn't working.
    // alignItems: 'center',
    // justifyContent: 'center',
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});