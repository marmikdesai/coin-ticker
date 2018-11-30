import React, { Component } from 'react';
import CoinView from "./CoinView";

const pagination = {
  margin: "0",
  padding: "10px"
}

const paginationLi = {
  display: "inline-block",
  padding: "0 5px",
  cursor: "pointer"
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      sortBy: "id",
      currentPage: 1,
      coinsPerPage: 2
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    let parentElm = event.target.parentElement.querySelectorAll("li");
    Object.keys(parentElm).map(function(key, index) {
      if(parentElm[key].classList.contains("active")) {
        parentElm[key].style.color = "black";
        parentElm[key].classList.remove("active")
      }
    });
    event.target.classList.add("active");
    event.target.style.color = "blue";
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleChange(event) {
    let parentElm = document.querySelector("#pagination").querySelectorAll("li");
    Object.keys(parentElm).map(function(key, index) {
      if(parentElm[key].classList.contains("active")) {
        parentElm[key].style.color = "black";
        parentElm[key].classList.remove("active")
      }
    });
    this.setState({
      sortBy: event.target.value,
      currentPage: 1,
      coinsPerPage: 2
    }, () => this.API());
  }

  componentDidMount() {
    this.API()
    this.interval = setInterval(() => {
      this.API()
    }, 60000);
  }

  API() {
    return fetch(`https://api.coinmarketcap.com/v2/ticker/?start=1&sort=${this.state.sortBy}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div>Loading</div>
      )
    }

    const { currentPage, coinsPerPage } = this.state,
          indexOfLastTodo = currentPage * coinsPerPage,
          indexOfFirstTodo = indexOfLastTodo - coinsPerPage,
          currentCoins = Object.entries(this.state.data.data).slice(indexOfFirstTodo, indexOfLastTodo),
          pageNumbers = [],
          coinList = this.state.data.data,
          output = [];

    const renderCoins = currentCoins.map((coinList, val) => {
      output.push(<CoinView data={coinList[1]} key={val} />)
    });

    for (let i = 1; i <= Math.ceil(Object.keys(this.state.data.data).length / coinsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick} style={paginationLi}>
          {number}
        </li>
      )
    });

    return (
      <div>
        <form>
          <select onChange={this.handleChange}>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="rank">Rank</option>
          </select>
        </form>
        {output}
        <ul style={pagination} id="pagination">{renderPageNumbers}</ul>
      </div>
    )
  }
}
export default Home;
