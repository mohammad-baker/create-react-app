import React from "react";

class HornedBeasts extends React.Component{
    render(){
        return(
<div>
    <h2>
  {this.props.title}
    </h2>
    <p>
    {this.props.description}
    </p>
    <img src={this.props.image_url} alt={this.props.keyword}/>

</div>
        )
    }
}
export default HornedBeasts
//now I saw that i should make pull requst