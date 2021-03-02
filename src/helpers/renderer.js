import React from 'react';

//Render a React element to its initial HTML. This should only be used on the server. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

//If you call ReactDOM.hydrate() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req ,store)  => {
    const content = renderToString(
    <Provider store={store}>
      <StaticRouter Location = {req.path} context={{}}>
          <Routes />
       </StaticRouter > 
       </Provider>
    )

    return `
    <html>
    <head></head>
    `
}

