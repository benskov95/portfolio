import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Background from './components/Background';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import './root-css/App.css';
import { useState } from 'react';

function App() {
  const [previousLoc, setPreviousLoc] = useState("/");

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Background />

        <Routes>
          <Route path="/portfolio" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home previousLoc={previousLoc} setPreviousLoc={setPreviousLoc} />} />
          <Route path="/work" element={<Work previousLoc={previousLoc} setPreviousLoc={setPreviousLoc} />} />
          <Route path="/about" element={<About previousLoc={previousLoc} setPreviousLoc={setPreviousLoc} />} />
          <Route path="/contact" element={<Contact previousLoc={previousLoc} setPreviousLoc={setPreviousLoc} />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
