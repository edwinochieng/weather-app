
import React, { useState,useEffect } from "react";
import City from "./components/City";
import Weatherinfo from "./components/Weatherinfo";

function App() {
  useEffect(() =>{
    getWeather();
  });

  const [weather,setWeather] =useState([]);
  const [conditions, setConditions] = useState({});
  const [showWeather, setShowWeather] = useState(false);
  
  const getWeather = async(cityName) =>{
    const apiKey = process.env.REACT_APP_API_KEY;
    const city = cityName
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+ apiKey + '&units=metric');
    const data = await api.json();
    setWeather(data.weather[0]);
    setConditions(data.main)
    setShowWeather(true);
    
  
  }
  return (
    <div className="flex flex-col items-center h-screen bg-cyan-300 bg-opacity-50">
      <City
        onAdd = {getWeather}
      />
      {showWeather?<Weatherinfo
        
        description = {weather.description}
        temperature = {conditions.temp}
        humidity = {conditions.humidity}
        pressure = {conditions.pressure}
        icon = {weather.icon}
      /> : null}
      
    </div>
  );
}

export default App;
