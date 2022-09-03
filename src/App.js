import Bubbles from './components/Bubbles';
import Home from './components/Home';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './root-css/App.css';

function App() {
  return (
    <div className="App">
      {/* <Intro /> */}
      <Navbar />
      <Bubbles />
      <Home />
    </div>
  );
}

export default App;
