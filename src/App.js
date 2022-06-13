import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <Post /> */}
      <Footer />
    </div>
  );
}

export default App;
