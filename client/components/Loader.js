import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  Image,
  Animated,
} from 'react-native';
import { Container, Content, Button } from 'native-base';

class Loader extends React.Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()
  }

  openHome = () => {
    this.props.history.push('/')
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '1440deg'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return(
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image 
          source={require('../images/loader2.png')}
          style={styles.ball}>
        </Image>
      </Animated.View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball:{
    width: 100,
    height: 100,
  },
});

export default Loader;