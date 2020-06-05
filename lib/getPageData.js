import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import Profile from './Profile.js';
export default function Home(props) {
  var PageComponent;

  try {
    switch (props.RouteName) {
      case 'Profile':
        PageComponent = Profile;
        break;
    }

    return ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(PageComponent, null));
  } catch (exception) {}
} // Lazy Load all component. // TODO;  //var PageComponent = React.lazy(() => import('./Profile.js'));
///   case 'Profile': { PageComponent = import('./Profile.js'); }; break;