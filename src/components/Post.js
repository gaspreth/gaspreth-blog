// import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

// TODO: open article files & routing
function Post() {
  return (
    <div className="text-3xl text-white">
      <Markdown># Hello</Markdown>
    </div>
  );
}

export default Post;