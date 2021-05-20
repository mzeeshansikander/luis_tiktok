import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import withRetry from 'fetch-retry';

const TIKTOK_OEMBED_BASE_URL = `https://www.tiktok.com/oembed`;

const fetchRetry = withRetry(window.fetch);

const url ='https://www.tiktok.com/@scout2015/video/6718335390845095173'
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(undefined);
  const [scriptSrc, setScriptSrc] = useState(undefined);
  const [html, setHTML] = useState(undefined);

  const ref = useRef(null);

  useEffect(() => {
    fetchRetry(`${TIKTOK_OEMBED_BASE_URL}?url=${url}`, {
      retries: 3,
      retryDelay: (attempt) => 2 ** attempt * 1000
    })
      .then((res) => res.json())
      .then((res) => {
		  console.log(res)
        if (res && res.status_msg) throw new Error(res.status_msg);

        if (!res || !res.html) throw new Error("API response doesn't look right");

        const htmlString = res.html;

        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;

        const scriptTag = tempElement.getElementsByTagName('script')[0];

        setScriptSrc(scriptTag && scriptTag.src);
        setHTML(htmlString.substr(0, htmlString.indexOf('<script')));
      })
      .catch((err) => setError(err));
  }, [url]);

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <Helmet>
        <script id='ttEmbedder' async src={scriptSrc} />
      </Helmet>
      <div
        ref={ref}
        style={{ display: html ? 'flex' : 'none' }}
        dangerouslySetInnerHTML={{ __html: html || '' }}
      />
    </div>
  );
}