import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import SearchBar from "./components/SearchBar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      filtered: foods
    };
  }

  // This filter function is updating the array of the state to show the names that includes into the searchbar
  filterFood = input => {
    const filtered = this.state.foods.filter(el =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  }

  render() {
    return (
      <div>

      {/* Seacher bar to take the name */}
      <SearchBar filterFood={this.filterFood} />

      {/* Filter the array to check with the search bar. */}
      <div>
          <div >
            {this.state.filtered.map((el, i) => (
              <FoodBox key={i} food={el}  />
            ))}
        </div>
        </div>

      </div>
    );
  }
}

export default App;
