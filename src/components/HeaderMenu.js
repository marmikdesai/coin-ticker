import React, { Component } from 'react';

const Title = {
  textAlign: "center"
}
const Nav = {
  display: "flex"
}

const Nav_li = {
  flexGrow: 1,
  flexBasis: 0,
  textAlign: "center"
}

class HeaderMenu extends Component {
  push = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        <h2 style={Title}>Welcome to coin</h2>
        <ul style={Nav}>
          <li onClick={()=>{this.push("/")}} style={Nav_li}>Home</li>
          <li onClick={()=>{this.push("/profile")}} style={Nav_li}>Profile</li>
        </ul>
      </div>
    );
  }
}
export default HeaderMenu;
