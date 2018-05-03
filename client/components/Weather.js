import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { Container, Content, Button, Card, Header, Icon } from 'native-base';
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
        <Header style={styles.head}>
          <Text style={styles.headtxt}>Salt Lake City</Text>
          </Header>
        <Content style={styles.background} scrollEnabled={false}>
              {
                this.state.days.map( (element, index) => {
                  return (
                    <Card key={index} style={styles.cards}>
                        <Text style={{fontWeight: "900"}}>{element.date}</Text>
                      <Image
                        style={{width: 50, height: 50}}
                        source={{uri: element.icon_url}}
                        />
                      <Text>{element.conditions}</Text>
                      <Text>High: {element.temperature.high.fahrenheit}F | {element.temperature.high.celsius}C</Text>
                      <Text>Low: {element.temperature.low.fahrenheit}F | {element.temperature.low.celsius}C</Text>
                      <Text>Wind: {element.wind.dir} @ {element.wind.mph} MPH</Text>
                    </Card>
                  )   
                })
              }
         
                <Button block style={styles.btn} onPress={this.openHome}>
                  <Text style={styles.textBtn}>Home</Text>
                </Button>
        </Content>
             
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#2a3035',
  },
  head:{
    backgroundColor: '#2a3035',
    shadowColor: 'transparent',
  },
  headtxt:{
    marginTop: 5,
    fontSize: 25,
    color: 'white',
  },
  textBtn:{
    fontSize: 18,
    color: 'white',
  },
  btn: {
    marginTop: 15, 
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#7B9CC3',
  },
  cards:{
    marginTop: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Weather;