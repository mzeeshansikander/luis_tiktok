
import InnerHTML from "dangerously-set-html-content";

function createMarkup() {
  return { __html: "First &middot; Second" };
}

function createEmbedMarkup() {
  return {
    __html:
      '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015">@scout2015</a> <p>Scramble up ur name & I’ll try to guess it😍❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage">#foryoupage</a> <a title="petsoftiktok" target="_blank" href="https://www.tiktok.com/tag/petsoftiktok">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic">#aesthetic</a></p> <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501">♬ original sound - tiff</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'
  };
}

function App() {
  return (
    <div className="App">
      <h1>Embedding HTML</h1>
      <InnerHTML html={createEmbedMarkup().__html} />
    </div>
  );
}


export default App;
