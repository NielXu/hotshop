import React from 'react';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  render() {
    return <h2>Admin Landing page</h2>
  }
}