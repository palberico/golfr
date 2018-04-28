import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Dimensions, 
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Link } from 'react-router-native';

class Home extends React.Component {

  openOrganize = () => {
    this.props.history.push('/organize')
  }
  
  openLoader = () => {
    this.props.history.push('/loader')
  }
  
  openTournaments = () => {
    this.props.history.push('/tournaments')
  }
  
  openLeagues = () => {
    this.props.history.push('/leagues')
  }

  openWeather = () => {
    this.props.history.push('/weather')
  }

  render() {
    return (
      <Container>
        <Content scrollEnabled={false}>
          <ImageBackground 
            source={require('../images/Golfr.jpg')}
            style={styles.backGround}
          >
          <View style={styles.btnView}>
            <Button block style={styles.btn} onPress={this.openOrganize}>
              <Text style={styles.textBtn}>Organize</Text>
            </Button>
            <Button block style={styles.btn2} onPress={this.openTournaments}>
              <Text style={styles.textBtn}>Play</Text>
            </Button>
            <Button block style={styles.btn2} onPress={this.openLoader}>
              <Text style={styles.textBtn}>Ball</Text>
            </Button>
            <Button block style={styles.btn2} onPress={this.openWeather}>
              <Text style={styles.textBtn}>Weather</Text>
            </Button>
            </View>
          </ImageBackground>
        </Content>
      </Container>
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
  textBtn:{
    fontSize: 18,
    color: 'white',
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
    marginTop: 10, 
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});

export default Home;