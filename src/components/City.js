import React, { useState } from "react";

function City(props) {
  const [cityName, setCityName] = useState("");

  const handleChange = (event) => {
    setCityName(event.target.value);
  };
  return (
    <div>
      <input
        className="border border-solid border-cyan-200 rounded-2xl h-8 w-96 my-16 h pl-4 text-zinc-500 focus: outline-white"
        type="text"
        placeholder="Enter city name"
        onChange={handleChange}
        value={cityName}
      />
      <button
        onClick={() => {
          props.onAdd(cityName);
        }}
        className="ml-2 border border-solid border-white border-2 rounded-full h-8 w-16 text-white text-sm font-bold"
      >
        Search
      </button>
    </div>
  );
}

export default City;
