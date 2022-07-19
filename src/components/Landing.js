import { posts } from "../data/posts";

function Landing() {
  return (
    <div className="bg-black">
      <div className="container flex justify-center mx-auto text-white items-center">
        {/* <h1 className="text-3xl">Blog posts</h1> */}
        <div className="w-2/3 mx-auto my-12">
          {posts.map((post) => (
            <a href={post.fileName.slice(0,-3)} className="w-full text-left"> 
              <h1 className="text-2xl">{post.title}</h1>
              <p className="text-gray-400"><b>TL;DR </b>{post.tldr}</p>
              <br /><br />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;