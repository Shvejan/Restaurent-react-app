import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DistDetails from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <div className="container">
          <DistDetails
            dish={
              this.state.dishes.filter(
                (d) => d.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
