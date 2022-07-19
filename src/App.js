import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Post from './components/Post';
import { posts } from "./data/posts";


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          {posts.map(post => (
            <Route key={post.title} path={post.fileName.slice(0,-3)} element={<Post article={post} />} />
          ))}
          <Route path='*' element={<div className='text-white'>Sorry nothing to see on this link!</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;