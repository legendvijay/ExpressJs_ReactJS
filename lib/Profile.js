import React from 'react';
import Me from './Me.js';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Me, null))));
  }

}