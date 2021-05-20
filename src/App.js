
import InnerHTML from "dangerously-set-html-content";
import { useEffect, useState } from 'react';

function createMarkup() {
  return { __html: "First &middot; Second" };
}

function createEmbedMarkup(data) {
  return {
    __html:
      data
  };
}


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@muhammadzeeshan84/video/6964349075789532417?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6964308303665595905')
  .then(response => response.json())
  .then(data =>
    setData(data)
     );

  }, [])
  return (
    <div className="App">
      <h1>React - Embedding HTML with Script Tags</h1>
      <InnerHTML html={createEmbedMarkup(data.html).__html} />

    </div>
  );
}


export default App;
