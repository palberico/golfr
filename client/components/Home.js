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
   <View style={styles.btnView}>
      <Button block style={styles.btn}>
              <Text style={styles.textBtn}>Organize</Text>
            </Button>

            <Button block style={styles.btn2}>
              <Text style={styles.textBtn}>Play</Text>
            </Button>
            </View>
   

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
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btn2: {
    marginTop: 15, 
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  textBtn:{
    fontSize: 25,
    color: 'white',
    textAlign: 'right',
  },
});