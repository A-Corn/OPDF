import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import DisplayAll from "./components/DisplayAll";
import NewFruit from "./components/NewFruit";
import OneFruitData from "./components/OneFruitData";
import EditFruit from "./components/EditFruit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DisplayAll />} />
            <Route path="/new/fruit" element={<NewFruit />} />
            <Route path="/fruit/:id" element={<OneFruitData />} />
            <Route path="/fruit/edit/:id" element={<EditFruit />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
