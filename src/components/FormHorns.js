import React from "react";
import Form from "react-bootstrap/esm/Form";

class FormHorns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theHorns: "",
    };
  }

  getNumOfHorn = (e) => {
    e.preventDefault();
    if (e.target.value === "0") {
      return this.props.showTheHornes("0");
    } else {
      this.props.showTheHornes(e.target.value);
    }
  };

  render() {
    return (
      <center>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "18rem" }}
          onChange={this.getNumOfHorn}
        >
          <option value="0">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </center>
    );
  }
}
export default FormHorns;
