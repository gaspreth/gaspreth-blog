import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Post from './components/Post';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<h1 className='text-white'>Sorry nothing to see on this link!</h1>} />
        </Routes>
        <Post />
        <Footer />
      </Router>
    </div>
  );
}

export default App;