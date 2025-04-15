import React, { Component } from 'react';

class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Hello, {firstName} {lastName}!</h2>
      </div>
    );
  }
}

export default function Q13Wrapper() {
  return <UserGreeting firstName="John" lastName="Doe" />;
}
