import React from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/style.css'
import {Card,Button,Row,Col,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt,faSmog,faWind,faCloud,faSun,faCloudShowersHeavy, } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';
import { icon } from '@fortawesome/fontawesome-svg-core';
//import 'moment-timezone';


const API_key = '95cb5367adec4fce0c50ae88f92f6d82';
const city = 'Zaozhuang';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=${API_key}`;

//const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${API_key}`;

class Weather_body extends React.Component{
    constructor(){
        super()
        this.state ={
           weekday1:'',
           weekday2:'',
           weekday3:'',
           weekday4:'',
           weekday5:'',
           weekday1_weather:'',
           weekday2_weather:'',
           weekday3_weather:'',
           weekday4_weather:'',
           weekday5_weather:'',
           weekday1_temp:'',
           weekday2_temp:'',
           weekday3_temp:'',
           weekday4_temp:'',
           weekday5_temp:'',
          
           


        }
    }
    componentDidMount(){
        //API call
        Axios
        .get(api)
        .then(response =>{
            
            this.setState({
                weekday1:response.data.list[3].dt_txt,
                weekday2:response.data.list[11].dt_txt,
                weekday3:response.data.list[19].dt_txt,
                weekday4:response.data.list[27].dt_txt,
                weekday5:response.data.list[35].dt_txt,
                weekday1_weather:response.data.list[3].weather[0].main,
                weekday2_weather:response.data.list[11].weather[0].main,
                weekday3_weather:response.data.list[19].weather[0].main,
                weekday4_weather:response.data.list[27].weather[0].main,
                weekday5_weather:response.data.list[35].weather[0].main,
                weekday1_temp:Math.round(response.data.list[3].main.temp),
                weekday2_temp:Math.round(response.data.list[11].main.temp),
                weekday3_temp:Math.round(response.data.list[19].main.temp),
                weekday4_temp:Math.round(response.data.list[27].main.temp),
                weekday5_temp:Math.round(response.data.list[35].main.temp),
                   

            })
            

            
            
           

            

            /*temp对应日期*/
            console.log(Math.round(response.data.list[3].main.temp));
            console.log(Math.round(response.data.list[11].main.temp));
            console.log(Math.round(response.data.list[19].main.temp));
            console.log(Math.round(response.data.list[27].main.temp));
            console.log(Math.round(response.data.list[35].main.temp));

              /*weather对应日期*/
            
              console.log(response.data.list[3].weather[0].main);
              console.log(response.data.list[11].weather[0].main);
              console.log(response.data.list[19].weather[0].main);
              console.log(response.data.list[27].weather[0].main);
              console.log(response.data.list[35].weather[0].main);

            
            

          
          
            
        })
    }

    render(){
        var weatherIcon;
        switch(this.state.weekday1_weather){
            case "Clear":
                weatherIcon = "http://openweathermap.org/img/wn/01d.png";
                break;
            case "Clouds":
                weatherIcon = "http://openweathermap.org/img/wn/02d.png";
                break;
            case "Rain":
                weatherIcon = "http://openweathermap.org/img/wn/09d.png";
                break;
            default:
                break;
        }
        var weatherIcon1;
        switch(this.state.weekday2_weather){
            case "Clear":
                weatherIcon1 = "http://openweathermap.org/img/wn/01d.png";
                break;
            case "Clouds":
                weatherIcon1 = "http://openweathermap.org/img/wn/02d.png";
                break;
            case "Rain":
                weatherIcon1 = "http://openweathermap.org/img/wn/09d.png";
                break;
            default:
                break;
        }
        var weatherIcon2;
        switch(this.state.weekday3_weather){
            case "Clear":
                weatherIcon2 = "http://openweathermap.org/img/wn/01d.png";
                break;
            case "Clouds":
                weatherIcon2 = "http://openweathermap.org/img/wn/02d.png";
                break;
            case "Rain":
                weatherIcon2 = "http://openweathermap.org/img/wn/09d.png";
                break;
            default:
                break;
        }
        var weatherIcon3;
        switch(this.state.weekday4_weather){
            case "Clear":
                weatherIcon3 = "http://openweathermap.org/img/wn/01d.png";
                break;
            case "Clouds":
                weatherIcon3 = "http://openweathermap.org/img/wn/02d.png";
                break;
            case "Rain":
                weatherIcon3 = "http://openweathermap.org/img/wn/09d.png";
                break;
            default:
                break;
        }
        var weatherIcon4;
        switch(this.state.weekday5_weather){
            case "Clear":
                weatherIcon4 = "http://openweathermap.org/img/wn/01d.png";
                break;
            case "Clouds":
                weatherIcon4 = "http://openweathermap.org/img/wn/02d.png";
                break;
            case "Rain":
                weatherIcon4 = "http://openweathermap.org/img/wn/09d.png";
                break;
            default:
                break;
        }
        
        
        return(
                <Card.Body className="weather-card_body">
                    <Card.Text className="">
                        {/*<FontAwesomeIcon className="weather-icons" icon={faWind} />
                        <FontAwesomeIcon className="weather-icons" icon={faBolt} />
                        <FontAwesomeIcon className="weather-icons" icon={faSmog} />
                        <FontAwesomeIcon className="weather-icons" icon={faCloud} />
                        <FontAwesomeIcon className="weather-icons" icon={faSun} />
                        <FontAwesomeIcon className="weather-icons" icon={faCloudShowersHeavy} />*/}

                        <Container>
                            <Row>
                                <Col>
                                    <Col>
                                        <Moment className="weather-card_weekday1" format="dddd">{this.state.weekday1}</Moment>
                                    </Col>
                                    <Col>
                                        {/*<FontAwesomeIcon className="weather-icons" icon = {faCloud}/>*/}
                                        <img src = {weatherIcon}></img>
                                        
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_weather">{this.state.weekday1_weather}</p>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_temp">{this.state.weekday1_temp}°</p>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <Moment className="weather-card_weekday2" format="dddd">{this.state.weekday2}</Moment>
                                    </Col>
                                    <Col>   
                                        <img src = {weatherIcon1}></img>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_weather">{this.state.weekday2_weather}</p>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_temp">{this.state.weekday2_temp}°</p>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <Moment className="weather-card_weekday3" format="dddd">{this.state.weekday3}</Moment>
                                    </Col>
                                    <Col>
                                        <img src = {weatherIcon2}></img>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_weather">{this.state.weekday3_weather}</p>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_temp">{this.state.weekday3_temp}°</p>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <Moment className="weather-card_weekday4" format="dddd">{this.state.weekday4}</Moment>
                                    </Col>
                                    <Col>
                                        <img src = {weatherIcon3}></img>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_weather">{this.state.weekday4_weather}</p>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_temp">{this.state.weekday4_temp}°</p>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <Moment className="weather-card_weekday5" format="dddd">{this.state.weekday5}</Moment>
                                    </Col>
                                    <Col>
                                        <img src = {weatherIcon4}></img>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_weather">{this.state.weekday5_weather}</p>
                                    </Col>
                                    <Col>
                                        <p className = "weekday1_temp">{this.state.weekday5_temp}°</p>
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
        )
    }
}

export default Weather_body