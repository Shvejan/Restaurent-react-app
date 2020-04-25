import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";

class DishDetails extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1" key={dish.name}>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>
                <h4>{dish.name}</h4>
              </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }
  renderComments(comments) {
    console.log(comments);
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1" key={comments}>
          <h4>Comments</h4>
          <div>
            <ul className="list-unstyled">
              {comments.map((c) => {
                return (
                  <ul className="list-unstyled" key={c.author}>
                    <li>{c.comment}</li>
                    <li>
                      -- {c.author} ,{" "}
                      {new Date(c.date).toDateString().substring(4)}
                    </li>
                    <br />
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetails;
