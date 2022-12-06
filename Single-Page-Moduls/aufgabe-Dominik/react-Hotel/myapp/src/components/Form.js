import { useState } from "react";

function Form() {
    const [input, setInput] = useState({
        vorName: "",
        nachName: "",
        anreiseDatum: "",
        abreiseDatum: "",
    });
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        
    };
    console.log(input);
    
    const handleRest = (e) => {
        e.preventDefault();
        setInput("");
        console.log(input);
    };
    // oder
    
     const handleSubmit = (e) => {
         e.target.vorName.value = "";
         e.target.nachName.value = "";
         e.target.anreiseDatum.value = "";
         e.target.abreiseDatum.value = "";
         e.preventDefault();
         console.log(input);

         };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}> 
            {/* onSubmit={handleSubmit} */}
                <label>VorName : </label>
                <input
                    type="text"
                    placeholder="vorName"
                    onChange={handleInput}
                    value={input.vorName}
                    name="vorName"
                />
                <br></br>
                <label>NachName :</label>
                <input
                    type="text"
                    placeholder="nachName"
                    onChange={handleInput}
                    value={input.nachName}
                    name="nachName"
                />
                <br></br>
                <label>AnreiseDatum:</label>
                <input
                    type="text"
                    placeholder="anreiseDatum"
                    onChange={handleInput}
                    value={input.anreiseDatum}
                    name="anreiseDatum"
                />
                <br></br>
                <label>AbreiseDatum:</label>
                <input
                    type="text"
                    placeholder="abreiseDatum"
                    onChange={handleInput}
                    value={input.abreiseDatum}
                    name="abreiseDatum"
                />
                <br></br>

              <input type="submit" value="submit" />
                 {/* <button onClick={handleInput}>Save</button>  */}
                 <button onClick={handleRest}>Reset</button> 

            </form>
        </div>
    );
}
export default Form;
