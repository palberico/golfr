import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { Root } from 'native-base';
import Home from './components/Home';
import Organize from './components/Organize';
import Loader from './components/Loader';
import Leagues from './components/Leagues';
import Tournaments from './components/Tournaments';
import Splash from './components/Splash';
import Weather from './components/Weather';
import Register from './components/Register';
import Search from './components/Search';

class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/organize' component={Organize} />
          <Route exact path='/loader' component={Loader} />
          <Route exact path='/leagues' component={Leagues} />
          <Route exact path='/tournaments' component={Tournaments} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path='/weather' component={Weather} />
        </Switch>
      </NativeRouter>
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

export default () =>
  <Root>
    <App />
  </Root>;