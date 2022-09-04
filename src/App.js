import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Bubbles from './components/Bubbles';
import Home from './components/Home';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import './root-css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Intro /> */}
        <Navbar />
        <Bubbles />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
