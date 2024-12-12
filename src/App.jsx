import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Import Routes here
import Navbar from './components/navbar.jsx';  // Assuming navbar.jsx is in the components folder
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// Importing the page components
import Home from './pages/Home.jsx';  
import About from './pages/About.jsx';   
import Contact from './pages/Contact.jsx'; 
import Education from './pages/Education.jsx'; 
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Routes wrapper for your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
