import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import DisplayAll from "./components/DisplayAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DisplayAll />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
