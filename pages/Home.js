import React from 'react';
import ReactDOMServer from 'react-dom/server.js'
import Profile from './Profile.js'


export default function Home(props) {
    return ReactDOMServer.renderToString(<Profile />);

}