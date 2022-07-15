import React from 'react';

function Weatherinfo(props) {
   
  return (
    <div className='bg-gray-50 bg-opacity-100 h-96 w-80 rounded-3xl mr-16 pt-16 flex flex-col items-center'>
    <div className='pr-4'>
    <h1 className=''>{props.city}</h1>
    <h1 className='font-bold font-sans text-3xl'>{props.temperature}°C </h1>
    
    <img src= 'http://openweathermap.org/img/wn/10d@2x.png' alt = {props.description} />
    </div>
    
    <div className='font-semibold font-sans text-md py-4' >
    <p className='pb-4'>{props.description}</p>
    <p>Humidity: {props.humidity} %</p>
    <p>Pressure: {props.pressure} Pa</p>
   
    </div>
   


      
    </div>
  )
}

export default Weatherinfo;