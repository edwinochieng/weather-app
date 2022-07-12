import React from "react";
import City from "./components/City";
import Weatherinfo from "./components/Weatherinfo";

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-cyan-300 bg-opacity-50">
      <City/>
      <Weatherinfo/>
    </div>
  );
}

export default App;
