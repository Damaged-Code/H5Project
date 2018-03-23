import React, { Component } from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

export default class Footer extends Component { 
    render() { 
        return (
          element
        )
    }
}