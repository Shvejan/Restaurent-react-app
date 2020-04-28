import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
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
import { Loading } from "./Loading";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length > len;
const required = (val) => val && val.length && val != "--Rating--";

const RenderComments = (props) => {
  if (props.isLoading) {
    return (
      <div className="col-12 col-md-5 m-1" key={props.comments}>
        <Loading />
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="col-12 col-md-5 m-1" key={props.comments}>
        <h4>{props.errMess}</h4>
      </div>
    );
  } else if (props.comments != null) {
    return (
      <div className="col-12 col-md-5 m-1" key={props.comments}>
        <h4>Comments</h4>
        <div>
          <ul className="list-unstyled">
            <Stagger in>
              {props.comments.map((c) => {
                return (
                  <Fade in>
                    <ul className="list-unstyled" key={c.author}>
                      <li>{c.comment}</li>
                      <li>
                        -- {c.author} ,{" "}
                        {new Date(c.date).toDateString().substring(4)}
                      </li>
                      <br />
                    </ul>
                  </Fade>
                );
              })}
            </Stagger>
          </ul>
        </div>
        <Row className="form-group">
          <Col md={{ size: 10 }}>
            <Button onClick={props.togleModel}>
              <i class="fa fa-pencil" /> Submit Comment
            </Button>
          </Col>
        </Row>
        <Modal isOpen={props.isModelOpen} toggle={props.togleModel}>
          <ModalHeader toggle={props.togleModel}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(values) =>
                props.handleSubmit(values, props.dishId, props.postComment)
              }
            >
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
    );
  } else return <div></div>;
};
const ShowDish = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="col-12 col-md-5 m-1" key={props.dish.name}>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <CardImg
              top
              src={baseUrl + props.dish.image}
              alt={props.dish.name}
            />
            <CardBody>
              <CardTitle>
                <h4>{props.dish.name}</h4>
              </CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  else return <div></div>;
};

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
  };
  handleSubmit = (values, dishId, postComment) => {
    this.togleModel();
    postComment(dishId, values.rating, values.name, values.comment);
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="justify-content-center"></div>
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
            <ShowDish
              dish={this.props.dish}
              isLoading={this.props.isLoading}
              errMess={this.props.errMess}
            />
            <RenderComments
              comments={this.props.comments}
              dishId={this.props.dish.id}
              postComment={this.props.postComment}
              togleModel={this.togleModel}
              handleSubmit={this.handleSubmit}
              isModelOpen={this.state.isModelOpen}
              errMess={this.props.commentsErrMess}
              isLoading={this.props.isLoading}
            />
          </div>
        </div>
      );
  }
}

export default DishDetails;
