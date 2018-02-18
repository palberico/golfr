import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Container, Content, Button } from 'native-base';

class Organize extends React.Component {

  openHome = () => {
    this.props.history.push('/')
  }

  render() {
    return(
      <Container>
        <Content scrollEnabled={false}>
          <ImageBackground
            source={require('../images/Golfr.jpg')}
            style={styles.backGround}
          >
            <Button block style={styles.btn} onPress={this.openHome}>
              <Text style={styles.textBtn}>Home</Text>
            </Button>
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
  btn: {
    marginTop: 325, // Figure out why alignItmes and justifyContent isn't working.
    // alignItems: 'center',
    // justifyContent: 'center',
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btn2: {
    marginTop: 50, // Figure out why alignItmes and justifyContent isn't working.
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
  btn4: {
    marginTop: 10, // Figure out why alignItmes and justifyContent isn't working.
    // alignItems: 'center',
    // justifyContent: 'center',
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});

export default Organize;