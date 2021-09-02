import React from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }
  increaseVots = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };
  showTheHornes = () => {
    this.props.handleClose();
    this.props.handleSelcet(
      this.props.title,
      this.props.description,
      this.props.image_url
    );
  };
  render() {
    return (
      <div>
        <center>
          {/* <img src={this.image_url}/> */}

          <Card style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              rounded
              onClick={this.showTheHornes}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Button variant="primary" onClick={this.increaseVots}>
                add votes {this.state.votes} ❤
              </Button>
              <Card.Title>{this.state.votes}</Card.Title>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}
export default HornedBeasts;
//now I saw that i should make pull requst
