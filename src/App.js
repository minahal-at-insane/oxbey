import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Pricing from './components/Pricing';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
