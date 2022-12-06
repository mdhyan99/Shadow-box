import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";

import React from "react";
import "./App.css";
import Contact from "./view/Contact";
import Home from "./view/Home";


function App() {

    return (
    <BrowserRouter>

    <div>
    <nav>
<Link to='/' > Home</Link>
<Link to='/contact'> Contact</Link>
</nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>

    </div>
    </BrowserRouter>)
}

export default App;
