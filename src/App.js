import { NavBar } from "./components/NavBar";
import Home from './components/Home'
import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Prodacts } from "./components/Prodacts";
import { Prodact } from "./components/Prodact";
import Cart from "./components/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Prodacts />} />
          <Route path="/products/:id" element={<Prodact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
