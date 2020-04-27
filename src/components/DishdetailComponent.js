import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
} from "reactstrap";
import { LocalForm, Control, Errors, controls } from "react-redux-form";
import { Link } from "react-router-dom";
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length > len;
const required = (val) => val && val.length && val != "--Rating--";
class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
    };
  }
  togleModel = () => {
    this.setState({
      isModelOpen: !this.state.isModelOpen,
    });
    console.log(this.state.isModelOpen);
  };
  handleSubmit = (valuse) => {
    this.togleModel();
    alert(JSON.stringify(valuse));
  };
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
          <Row className="form-group">
            <Col md={{ size: 10 }}>
              <Button type="submit" onClick={this.togleModel}>
                <i class="fa fa-pencil" aria-hidden="true" /> Submit Comment
              </Button>
            </Col>
          </Row>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="container">
        <div className="justify-content-center">
          <Modal isOpen={this.state.isModelOpen} toggle={this.togleModel}>
            <ModalHeader toggle={this.togleModel}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={{ size: 12, offset: 1 }}>
                    Rating
                  </Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.select
                      model=".rating"
                      id="rating"
                      name="rating"
                      className="form-control"
                      default="5"
                      validators={{ required }}
                    >
                      <option>--Rating--</option>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </Control.select>
                    <Errors
                      className="text-danger"
                      model=".rating"
                      show="touched"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="name" md={{ size: 12, offset: 1 }}>
                    Name
                  </Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      show="touched"
                      model=".name"
                      messages={{
                        required: "Required ",
                        maxLength: "length must be less than 15 characters",
                        minLength: "length must be more than 2 characters",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={{ size: 12, offset: 1 }}>
                    Comment
                  </Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows="5"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 1 }}>
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
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
