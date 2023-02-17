// import React, { useContext } from "react";
// import { ActivityContext } from "./Activity";



// export default function Display() {
//     const { value } = useContext(ActivityContext);
//     console.log(value);
//     // function handleClik (){
//     //   console.log("gkj");
//     // }
//     return (

//         <div>
//             <button onClick={value}> Get Activity</button>
//         </div>
//     );
// }

import {useContext} from 'react'
import {ActivityContext} from './Activity'
import SearchForm from './SearchForm'

export default function Display() {
  const {getActivity, toggleFilter, setToggleFilter} = useContext(ActivityContext)
  console.log({toggleFilter});

  return (
    <div className='display'>
        <SearchForm />
        <div className='buttonWrapper'>
          <button onClick={getActivity}>Get new activity</button>
          <button >Save activity</button>
          <button onClick={()=>setToggleFilter(!toggleFilter)}>Filter search</button>
        </div>
        <p>Here comes the new activity</p>
       
        
    </div>
  )
}
