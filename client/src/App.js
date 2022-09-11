import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import DisplayAll from "./components/DisplayAll";
import NewFruit from "./components/NewFruit";
import OneFruitData from "./components/OneFruitData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DisplayAll />} />
            <Route path="/new/fruit" element={<NewFruit />} />
            <Route path="/fruit/data" element={<OneFruitData />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
