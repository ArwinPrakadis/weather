import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Component } from 'react'
import Title from './components/Title'
import Form from './components/form'
import Weather from './components/weather'
//import App from './App'

const API ="506f58a479f785dab4c2dc0e7a44f73e";

class App extends Component {

  state={
    temperature : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined

  }
  
  getweather = async(e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`)
    const data = await api_call.json();
    if(city && country)
    {

    
    console.log(data.main.temp,data.name,data.sys.country,data.weather[0].description)
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
    humidity : data.main.humidity,
    description : data.weather[0].description,
    
  })
}
else{
  this.setState({
    temperature:undefined,
    city:undefined,
    country:undefined,
  humidity : undefined,
  description : undefined,
  error:'Please enter City Name and country Name'
  
})
}
  }
  render() {
    return (
      <div>
        
        <Title/>
        <Form getweather={this.getweather}/>
        
        <Weather 
        temperature={this.state.temperature}
        city = {this.state.city}
        country ={this.state.country}
        humidity ={this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />
      </div>
    )
  }
}

export default App


