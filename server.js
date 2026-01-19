import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(compression());
app.use(express.static(path.join(rootDir, 'public')));

app.get('/', (req, res) => {
  const appHtml = renderToString(React.createElement(App));

  const html = `<!DOCTYPE html>
<html data-wf-page="686c09a33211842a0ac0183d" data-wf-site="686c09a33211842a0ac0183d" lang="en">
<head>
  <meta charset="utf-8" />
  <title>GoShopGhana | Fresh FoodStuffs Delivered To You</title>
  <meta content="Fresh foodstuffs delivered to you across Ghana." name="description" />
  <meta content="GoShopGhana | Fresh FoodStuffs Delivered To You" property="og:title" />
  <meta content="Fresh foodstuffs delivered to you across Ghana." property="og:description" />
  <meta content="https://ik.imagekit.io/dr5fryhth/logo.png?updatedAt=1768771460010" property="og:image" />
  <meta content="GoShopGhana | Fresh FoodStuffs Delivered To You" property="twitter:title" />
  <meta content="Fresh foodstuffs delivered to you across Ghana." property="twitter:description" />
  <meta content="https://ik.imagekit.io/dr5fryhth/logo.png?updatedAt=1768771460010" property="twitter:image" />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="Webflow" name="generator" />
  <link href="/css/style-686c09a33211842a0ac0183d.css" rel="stylesheet" type="text/css" />
  <link href="/css/style-styles.css" rel="stylesheet" type="text/css" />
  <link href="/css/style.css" rel="stylesheet" type="text/css" />
  <link href="/css/sections.css" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">
    WebFont.load({
      google: {
        families: ["Barlow Condensed:400,500,600,700", "League Script:400"]
      }
    });
  </script>
  <script type="text/javascript">
    !function(o, c) {
      var n = c.documentElement,
        t = " w-mod-";
      n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c.documentElement.doScroll) && (n.className += t + "touch")
    }(window, document);
  </script>
  <link href="https://ik.imagekit.io/dr5fryhth/logo.png?updatedAt=1768771460010" rel="shortcut icon" type="image/x-icon" />
  <link href="https://ik.imagekit.io/dr5fryhth/logo.png?updatedAt=1768771460010" rel="apple-touch-icon" />
  <script defer src="/js/script-cloud-umami-is.js" data-website-id="d3e54v103j8qbb.cloudfront.net"></script>
</head>
<body>
  <div id="root">${appHtml}</div>
  <script src="/dist/client.js"></script>
  <script src="/js/script-d3e54v103j8qbb-cloudfront-net.js" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/script-686c09a33211842a0ac0183d.js" type="text/javascript"></script>
  <script src="/js/script-gsap.js" type="text/javascript"></script>
  <script src="/js/script-gsap-1.js" type="text/javascript"></script>
  <script src="/js/script-gsap-2.js" type="text/javascript"></script>
  <script src="/js/script-gsap-3.js" type="text/javascript"></script>
  <script src="/js/script-gsap-4.js" type="text/javascript"></script>
  <script src="/js/script-gsap-5.js" type="text/javascript"></script>
  <script src="/js/script.js"></script>
  <script src="/js/script-scripts.js"></script>
</body>
</html>`;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
