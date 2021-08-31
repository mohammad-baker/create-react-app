
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title:"DFbghj",
      image:"",
      descrition:"",
    }
  }

  handleClose = () => {
    this.setState({ show: !this.state.show ,
    })
    
  }

  handleSelcet = (title,descrition,image) => {
    
    this.setState({title:title,
      descrition:descrition,
      image:image
    })
  }
    
  

  render() {
    return (
      <div>
        <Header />
        <Main
        handleSelcet={this.handleSelcet}
          handleClose={this.handleClose} />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          image={this.state.image}
          descrition={this.state.descrition}

        />
      </div>
    )
  }



}


export default App;
