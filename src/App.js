import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomeBootstrap";
import Profile from "./components/Profile";
import Cards from "./components/CardsBootstrap";
import CardMaterial from "./components/CardMaterial";
import HomeMaterial from "./components/HomeMaterials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMaterial />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cardsMat" element={<CardMaterial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
