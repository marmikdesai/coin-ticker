import React, { Component } from 'react';
import CoinPopUp from "./CoinPopUp";

const CoinHolder = {
  display: "flex",
  border: "1px solid #454545",
  background: "#f1f1f1"
}

const CoinHolderDiv = {
  flexGrow: 1,
  flexBasis: 0,
  textAlign: "center"
}

class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <div style={CoinHolder} onClick={this.togglePopup.bind(this)}>
          <div style={CoinHolderDiv} className="id">{this.props.data.rank}</div>
          <div style={CoinHolderDiv} className="name">{this.props.data.name}</div>
          <div style={CoinHolderDiv} className="symbol">{this.props.data.symbol}</div>
          <div style={CoinHolderDiv} className="price">{this.props.data.quotes.USD.price}</div>
        </div>
        {this.state.showPopup ?
          <CoinPopUp data={this.props.data} closePopup={this.togglePopup.bind(this)} />
          : null
        }
      </div>
    )
  }
}

export default CoinView;
