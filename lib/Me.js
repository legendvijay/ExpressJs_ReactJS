import React from 'react';
export default class Me extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [{
      "name": "test1"
    }, {
      "name": "test2"
    }];
    var listItems = data.map(d => /*#__PURE__*/React.createElement("li", {
      key: d.name
    }, d.name));
    return listItems;
  }

}