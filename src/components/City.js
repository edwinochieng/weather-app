import React from 'react'

function City() {
  return (
    <div>
        <input className="border border-solid border-cyan-200 rounded-2xl h-8 w-96 my-16 h pl-4 text-zinc-500 focus: outline-white" type="text" placeholder='Enter city name'/>
        <button className="ml-2 border border-solid border-white border-2 rounded-full h-8 w-16 text-white text-sm font-bold">Search</button>
    </div>
  )
}

export default City