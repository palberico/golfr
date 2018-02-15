import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Content scrollEnabled={false}>
          <Home />
        </Content>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGround: {
    width: deviceX,
    height: deviceY,
  },
});

export default App;
