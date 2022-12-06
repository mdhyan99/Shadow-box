import { useState } from "react";
import "./App.css";
import Helloworld from "./HalloWorld";
import Counter from "./Counter"

function App() {
    console.log("render App");
    const [counter, setCounter] = useState(0); // 0,1,2,3,...
    const [testProp, setTestProp] = useState(0); // 0,1,2,3,...

    const handleClick = (event) => {
      const newCounter = counter +1 ;
      if(counter > 5)setTestProp(counter +2)
        console.log(event);
        setCounter(newCounter);
    };
    return (
        <div className="App">
           
            <Counter counter={counter} />
            <br></br>
            <button onClick={handleClick}>click me</button> <br></br>
            {counter < 10 && <counter counter={counter}  testProp={testProp}/>} <Helloworld  handleClick={handleClick} />
        </div>
    );
}

export default App;
