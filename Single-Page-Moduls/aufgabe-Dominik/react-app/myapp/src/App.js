import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
     
    const handleChangeName = (event) => {
      setName(event.target.value);
  };


    const handleRest = () => {
        setEmail("");
    };

     const handleAddAt = () => {
      setEmail(email + "@");
  };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Forms</h1>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="E-Mail-Adresse"
                    onChange={handleChangeEmail}
                    value={email}
                />
                   {/* <input
                    type="text"
                    placeholder="E-Mail-Adresse"
                    onChange={handleInput}
                    value={value.email}
                /> */}
                <p>{name},Deine E-Mail-Adresse lautet {email}</p>
                <button onClick={handleAddAt}>@</button>
                <button onClick={handleRest}>Reset</button>
            </header>
        </div> 
    );
}

export default App;
