import React from "react";
import Form from 'react-bootstrap/Form';



class FormHorns extends React.Component{

constructor(props){
    super(props);
    this.state={
        theHorns:"",
    }
}

    getNumOfHorn=(e)=>{
        e.preventDefault();
        if(e.target.value==="0"){
            return(this.props.showTheHornes(0))
        }
        else {
            console.log(e.target.value);
            let numm=this.props.showTheHornes(e.target.value)
            return(numm)
        }
    }

    render(){
        return(
            <center>
            <Form.Select aria-label="Default select example"style={{ width: '18rem' }} onChange={this.getNumOfHorn}>
  <option value="0">Open this select menu</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="100">100</option>
</Form.Select>
</center>
        )
    }
}
export default FormHorns;