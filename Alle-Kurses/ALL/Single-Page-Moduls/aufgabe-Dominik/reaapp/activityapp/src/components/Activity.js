// import React, { createContext } from "react";

// export const ActivityContext = createContext();
// export default function Activity({ children }) {
//     function getActivity() {
//         // fetch("");
//         console.log("jdjlk");
//     }

//     return (
//     <ActivityContext.Provider value={getActivity}> 
//     {children} 
//     </ActivityContext.Provider>);
// }
import { createContext, useState } from 'react'

export const ActivityContext = createContext();

export default function Activity({children}) {
  const [toggleFilter, setToggleFilter] = useState(false);
    
  function getActivity(){
    fetch("http://www.boredapi.com/api/activity/")
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
    })
    console.log("it works");
  }

  return (

    <ActivityContext.Provider value={{getActivity, toggleFilter, setToggleFilter}}>
        {children}
    </ActivityContext.Provider>
  )
}
