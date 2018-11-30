import React, { Component } from 'react';

const popupHolder = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0, 0.4)"
}
const popupHolder_inner = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  margin: "auto",
  minWidth: "80%",
  background: "#fff",
  padding: "24px 24px",
  maxHeight: "80%",
  overflow: "auto",
  zIndex: "10",
}
const close = {
  width: "30px",
  height: "26px",
  position: "absolute",
  zIndex: "12",
  top: "15px",
  right: "30px",
  margin: "auto",
  color: "#000",
  textAlign: "center",
  background: "#f5f5f5",
  border: "none",
  padding: "0",
  cursor: "pointer"
}
const row = {
  border: "1px solid #454545",
}

class CoinPopUp extends Component {
  render() {
    let val = this.props.data,
        price = val.quotes.USD,
        timeStamp = val.last_updated,
        currentDateTime = new Date();
    currentDateTime.setTime(timeStamp);
    let humanDateTime = currentDateTime.toUTCString()
    return (
      <div style={popupHolder}>
        <div style={popupHolder_inner}>
          <div style={row}>name -> {val.name}</div>
          <div style={row}>circulating_supply -> {val.circulating_supply}</div>
          <div style={row}>last_updated -> {humanDateTime}</div>
          <div style={row}>max_supply -> {val.max_supply}</div>
          <div style={row}>rank -> {val.rank}</div>
          <div style={row}>symbol -> {val.symbol}</div>
          <div style={row}>market_cap-> {price.market_cap}</div>
          <div style={row}>market_cap -> {price.market_cap}</div>
          <div style={row}>percent_change_1h -> {price.percent_change_1h}</div>
          <div style={row}>percent_change_7d -> {price.percent_change_7d}</div>
          <div style={row}>percent_change_24h -> {price.percent_change_24h}</div>
          <div style={row}>price -> {price.price}</div>
          <div style={row}>volume_24h -> {price.volume_24h}</div>
          <button onClick={this.props.closePopup} style={close}>X</button>
        </div>
      </div>
    );
  }
}

export default CoinPopUp;
