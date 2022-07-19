import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';


function Post(props) {
  let fileName = props.article.fileName;
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../data/${fileName}`)
    .then(res => {
      fetch(res.default)
      .then(res => res.text())
      .then(res => setContent(res))
    })
    .catch(err => console.log(err));
  });

  return (
    <div className="container flex justify-center mx-auto text-white text-left items-center">
      <div className="w-2/3 mx-auto my-12">
        <ReactMarkdown children={content} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />
      </div>
    </div>
  );
}

export default Post;