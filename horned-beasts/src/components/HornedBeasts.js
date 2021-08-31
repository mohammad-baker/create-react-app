import React from "react";
import Card from 'react-bootstrap/Card'
class HornedBeasts extends React.Component{
   constructor(props){
     super(props);
     this.state={
       votes:0,
     }
   }
   increaseVots = () =>{
    this.setState({
votes:this.state.votes +1
    });
   };
  render(){
      
        return(
<div> 
  <center>





<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url}rounded  />
  <Card.Body>
    <Card.Title>
{this.props.title}
</Card.Title>
    <Card.Text>
    
  {this.props.description}

    </Card.Text>
    <button variant="primary"onClick={this.increaseVots}>add votes {this.state.votes} \u{2764}
</button>
<Card.Title>
{this.state.votes}

</Card.Title>
  </Card.Body>
  
</Card>

     </center>
 
 
</div>
        )
    }
}
export default HornedBeasts
//now I saw that i should make pull requst