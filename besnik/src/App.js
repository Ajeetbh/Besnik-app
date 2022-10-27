import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Service from './components/Service';
import Shop from './components/Shop';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}
export default App;
