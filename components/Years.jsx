"use client"

import { useState } from "react";

function Years() {
 
  let [year, setYear] = useState(2023);

  function yearLess(){
    setYear(year === 2023 ? year = 2023 :year -= 1);
  }
  function yearAdd(){
    setYear(year === 2028 ? year = 2028 : year += 1);
  }

  return (

      <div className="flex justify-evenly">
        <button className="bg-blue-400 rounded-xl" onClick={yearLess}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg>
        </button>

        <input type="text" readOnly className="border text-center outline-none" value={ year }/>

        <button className="bg-blue-400 rounded-xl" onClick={yearAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg>
        </button>
      </div>
  )
}

export default Years