import React from "react";

function Weatherinfo(props) {
  const imgUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <div className="bg-teal-50 h-96 w-80 rounded-3xl mr-16 pt-16 flex flex-col items-center">
      <div className="">
        <h1 className="">{props.city}</h1>
        <h1 className="font-bold font-sans text-3xl">{props.temperature}°C </h1>
      </div>

      <div>
        <img
          className="h-40 w-56 brightness-50 contrast-200"
          src={imgUrl}
          alt={props.description}
        />
      </div>

      <div className="font-semibold font-sans text-md pb-2">
        <p className="pb-4">{props.description}</p>
        <p>Humidity: {props.humidity} %</p>
        <p>Pressure: {props.pressure} Pa</p>
      </div>
    </div>
  );
}

export default Weatherinfo;
