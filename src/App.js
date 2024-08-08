import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Analyze } from './components/Analyze';
import { Reports } from "./components/Reports";
import { About } from './components/About';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Analyze />
      <br></br>
      <Reports />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
