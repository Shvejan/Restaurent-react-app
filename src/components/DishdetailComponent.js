import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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
  renderComments(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.description}>
          <h4>Comments</h4>
          <div key={dish.name}>
            <ul className="list-unstyled">
              {dish.comments.map((c) => {
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
      <div className="row">
        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish)}
      </div>
    );
  }
}

export default DishDetails;
