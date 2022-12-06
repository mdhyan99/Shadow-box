import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Kontakt from "./pages/Kontakt";
import Lebenslauf from "./pages/Lebenslauf";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import StartSeite from "./pages/StartSeite";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/" element={<StartSeite />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                    <Route path="*" element={<h1>Error 404</h1>} />
                    <Route path="/lebenslauf" element={<Lebenslauf />} />
                    <Route path="/kontakt" element={404} />
                    <Route path="/kontakt" element={< Kontakt />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
