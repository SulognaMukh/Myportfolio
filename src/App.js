import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Navtab from "./Components/Navtab";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navtab/>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
