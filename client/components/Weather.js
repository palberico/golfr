import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import axios from 'axios';

//Weather API
const API_KEY = "6783c659c7e915b2";
const ZIPCODE = '84108'

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      zipcode: ZIPCODE,
      days: [],
    }
  }

  _getForcast(zipcode)
  {
    const request_url = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + ZIPCODE + ".json";
    axios.get(request_url).then (  (response) => {
      if ( response.status == 200 ) {
        var weather = response.data.forecast.simpleforecast.forecastday;
        var forecast = [];
        weather.forEach( (element, index) => {
          forecast = forecast.concat([
            {
              date: element.date.weekday,
              temperature: 
              {
                high: 
                {
                  fahrenheit: element.high.fahrenheit,
                  celsius: element.high.celsius
                },
                low:
                {
                  fahrenheit: element.low.fahrenheit,
                  celsius: element.low.celsius
                }
              },
              conditions: element.conditions,
                wind:
                {
                  mph: element.avewind.mph,
                  dir: element.avewind.dir
                },
                average_humidity: element.avehumidity,
                icon_url: element.icon_url
            }
          ]);
        });
        this.setState({days: forecast});
      }
    }).catch( (error) => {
      console.log(error);
    });
  }

  openHome = () => {
    this.props.history.push('/')
  }

  render() {
    if ( this.state.days.length <= 0 )
      {
        this._getForcast(this.state.zipcode);
      }
    return(
      <Container>
        <Content>
            <Button block style={styles.btn} onPress={this.openHome}>
              <Text style={styles.textBtn}>Home</Text>
            </Button>
              {
                this.state.days.map( (element, index) => {
                  return (
                    <View key={index} style={{marginTop: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: "900"}}>{element.date}</Text>
                      <Image
                        style={{width: 50, height: 50}}
                        source={{uri: element.icon_url}}
                        />
                      <Text>{element.conditions}</Text>
                      <Text>High: {element.temperature.high.fahrenheit}F | {element.temperature.high.celsius}C</Text>
                      <Text>Low: {element.temperature.low.fahrenheit}F | {element.temperature.low.celsius}C</Text>
                      <Text>Wind: {element.wind.dir} @ {element.wind.mph} MPH</Text>
                    </View> 
                  )
                })
              }
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

export default Weather;