// React
import React, { Component } from 'react';

// Styles
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Right,
  Footer,
} from 'native-base';

// Router
import { Link } from 'react-router-native';

// Redux
// import { connect } from 'react-redux';
// import { fetchProducts, resetCart } from '../actions/products';

// Images for Home Screen
const randomImages = [
  require('../images/home/playrlogo.png'),
];

class Home extends Component {

  // componentDidMount = async() => {
  //   await this.props.dispatch(fetchProducts())
  //   // Reset cart counter on refresh
  //   this.props.dispatch(resetCart())
  // }

  joinEmailButton = () => {
    this.props.history.push('/register')
  }

  loginButton = () => {
    this.props.history.push('/login')
  }

  testButton = () => {
    this.props.history.push('/test')
  }

  guest = () => {
    this.props.history.push('/search')
  }

  // facebookLogIn = async () => {
  //   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('534726780240095', {
  //       permissions: ['public_profile'],
  //     })
  //   if (type === 'success') {
  //     // Gets the user's name using Facebook's Graph API
  //     const response = await fetch(
  //       `https://graph.facebook.com/me?access_token=${token}`);
  //     this.props.history.push('/search')
  //     Alert.alert(
  //       'Logged in!',
  //       `Hi ${(await response.json()).name}!`,
  //     )
  //   }
  // }

  render() {
    return (
      <Container>
        {/* <Header style={styles.headerBackground}>
          <Right>
            <Button iconRight transparent onPress={this.guest}>
              <Text style={styles.guest}>GUEST</Text>
              <Icon style={styles.icon} name='ios-arrow-forward' />
            </Button>
          </Right>
        </Header> */}
        <Content style={styles.background} scrollEnabled={false}>
          <Image
            style={styles.hero}
            source={randomImages[Math.floor(Math.random()*randomImages.length)]}
          />
          <View>
            <Button block style={styles.btn} onPress={this.facebookLogIn}>
              <Text style={styles.textBtn}>Login With Facebook</Text>
            </Button>
          </View>
          <View>
            <Link to='register'>
              <Button block light style={styles.btn2} onPress={this.joinEmailButton}>
                <Text style={styles.textBtn2}>Join With Email</Text>
              </Button>
            </Link>
          </View>
          <Button full transparent onPress={this.loginButton}>
            <Text style={styles.text}>Have an account? Sign in</Text>
          </Button>
        </Content>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;

const styles = {
  hero: {
    height: 200,
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 100,
  },
  btn: {
    marginTop: 75,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btn2: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textBtn:{
    fontSize: 18,
    color: 'white',
  },
  textBtn2:{
    fontSize: 18,
  },
  text:{
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
  },
  background:{
    backgroundColor: '#2a3035',
  },
  headerBackground:{
    shadowColor: 'transparent',
    shadowRadius: 0,
    backgroundColor: '#3D4E61',
  },
  guest: {
    fontWeight: 'bold',
  },
  icon:{
    paddingLeft: 2,
    color: 'black',
  },
};

// export default connect()(Home);
export default Home;

//Original code below


// import React, { Component } from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   ImageBackground, 
//   Dimensions, 
// } from 'react-native';
// import { Container, Content, Button } from 'native-base';
// import { Link } from 'react-router-native';

// class Home extends React.Component {

//   openOrganize = () => {
//     this.props.history.push('/organize')
//   }
  
//   openLoader = () => {
//     this.props.history.push('/loader')
//   }
  
//   openTournaments = () => {
//     this.props.history.push('/tournaments')
//   }
  
//   openLeagues = () => {
//     this.props.history.push('/leagues')
//   }

//   openWeather = () => {
//     this.props.history.push('/weather')
//   }

//   render() {
//     return (
//       <Container>
//         <Content scrollEnabled={false}>
//           <ImageBackground 
//             source={require('../images/Golfr.jpg')}
//             style={styles.backGround}
//           >
//           <View style={styles.btnView}>
//             <Button block style={styles.btn} onPress={this.openOrganize}>
//               <Text style={styles.textBtn}>Organize</Text>
//             </Button>
//             <Button block style={styles.btn2} onPress={this.openTournaments}>
//               <Text style={styles.textBtn}>Play</Text>
//             </Button>
//             <Button block style={styles.btn2} onPress={this.openLoader}>
//               <Text style={styles.textBtn}>Ball</Text>
//             </Button>
//             <Button block style={styles.btn2} onPress={this.openWeather}>
//               <Text style={styles.textBtn}>Weather</Text>
//             </Button>
//             </View>
//           </ImageBackground>
//         </Content>
//       </Container>
//     )
//   }
// };

// const deviceY = Dimensions.get('window').height;
// const deviceX = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   backGround: {
//     width: deviceX,
//     height: deviceY,
//   },
//   textBtn:{
//     fontSize: 18,
//     color: 'white',
//   },
//   btnView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     width: deviceY/ 2.5,
//     marginRight: 'auto',
//     marginLeft: 'auto',
//     backgroundColor: 'rgba(52, 52, 52, 0.8)',
//   },
//   btn2: {
//     marginTop: 10, 
//     width: deviceY/ 2.5,
//     marginRight: 'auto',
//     marginLeft: 'auto',
//     backgroundColor: 'rgba(52, 52, 52, 0.8)',
//   },
// });

// export default Home;