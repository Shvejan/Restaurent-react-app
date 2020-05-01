import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { baseUrl } from "../shared/baseUrl";

class Menu extends Component {
  render() {
    const menu = this.props.dishes.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card>
            <Link to={`/Restaurent-react-app/menu/${dish.id}`}>
              <CardImg
                width="100%"
                src={baseUrl + dish.image}
                alt={dish.name}
              />
              <CardImgOverlay>
                <CardTitle>
                  <h3>{dish.name}</h3>
                </CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });

    if (this.props.dishes.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.dishes.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.dishes.errMess}</h4>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="alert alert-primary" role="alert">
            Explore more by clicking on the images!
          </div>
          <div className="row">{menu}</div>
        </div>
      );
  }
}

export default Menu;
