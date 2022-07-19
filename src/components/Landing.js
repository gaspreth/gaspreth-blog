import { posts } from "../data/posts";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <div className="bg-black">
      <div className="container flex justify-center mx-auto text-white items-center">
        <div className="w-2/3 mx-auto my-12">
          {posts.map((post) => (
            <Link to={"/gaspreth-blog/"+post.fileName.slice(0,-3)} key={post.title} className="w-full text-left text-white"> 
              <h1>{post.title}</h1>
              <p><b>TL;DR </b>{post.tldr}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;