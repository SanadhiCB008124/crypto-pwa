
import './App.css';


import {BrowserRouter, } from "react-router-dom";


import Test from "./components/Test.tsx";
function App() {
    return (
        <BrowserRouter>

          <Test/>
        </BrowserRouter>
    );
}

export default App;
