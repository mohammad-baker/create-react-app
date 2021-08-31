import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
class SelectedBeast extends React.Component {
  render() {

    return (
      <div>
        <center>
        <Card style={{ width: '18rem' }}>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>
                {this.props.title}
              </Modal.Title>

                
        
            </Modal.Header>
            <Modal.Body>
            <Image src={this.props.image}fluid roundedCircle/>

              {this.props.descrition}
            </Modal.Body>
            <Card.Text>

            {/* <Modal.Img variant="top" src={this.props.image_url}rounded  /> */}
            </Card.Text>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.props.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>

          </Modal>
          </Card>
        </center>

      </div>
    );
  }
}


export default SelectedBeast;