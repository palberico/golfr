// React
import React, { Component } from 'react';

// Styles
import { Text, View, Dimensions, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Right,
  Footer,
} from 'native-base';

// Router
import { Link } from 'react-router-native';

const randomImages = [
    require('../images/home/playrlogo.png'),
  ];

class Register extends Component {

  cancelButton = () => {
    this.props.history.push('/')
  }

  doneButton = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <Container>
        {/* <Header style={styles.headerBackground}>
          <Left>
            <Button transparent onPress={this.cancelButton}>
              <Text>Cancel</Text>
            </Button>
          </Left>
          <Text style={styles.head}>Register</Text>
          <Right>
            <Button transparent onPress={this.doneButton}>
              <Text>Done</Text>
            </Button>
          </Right>
        </Header> */}
        <Content style={styles.background} scrollEnabled={false}>
          <Image
            style={styles.hero}
            source={randomImages[Math.floor(Math.random()*randomImages.length)]}
          />
          <View>
            <Text style={styles.text}>Please enter an username, email,</Text>
            <Text style={styles.text1a}>and create a password.</Text>
          </View>
            <Form>
              <Item floatingLabel style={styles.box}>
                <Label style={styles.labels}>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.box}>
                <Label style={styles.labels}>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.box}>
                <Label style={styles.labels}>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
            </Form>
            <View>
            <Link to='search'>
              <Button block light style={styles.btn2} onPress={this.doneButton}>
                <Text style={styles.textBtn2}>Sign Up</Text>
              </Button>
            </Link>
          </View>
            {/* ---Future--- preferences/categproes drop down (Men's, Women's, Accessories) on login landing shop */}
          <View>
            {/* <Text style={styles.text}>By signing up and using Playr, you are agreeing to its</Text> */}
            <Text style={styles.text2}>Terms and Conditions and Privacy Policy</Text>
          </View>
        </Content>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;

const styles = {
  background:{
    backgroundColor: '#2a3035',
  },
  hero: {
    height: 200,
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 100,
  },
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: 'white',
  },
  text1a:{
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  text2:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    color: 'white',
  },
  btn: {
    marginTop: 20,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btn2: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#7B9CC3',
  },
  textBtn2:{
    fontSize: 18,
    color: '#000',
  },
  headerBackground:{
    backgroundColor: '#000',
  },
  labels:{
    paddingLeft: 10,
    paddingTop: 5,
    color: '#000',
  },
  box:{
    backgroundColor: '#fff',
    width: deviceY/ 2.5,
    paddingLeft: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
};

export default Register;