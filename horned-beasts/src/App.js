
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Header from './components/Header';
import Main from './components/Main';
import Data from './assets/data.json';
import FormHorns from './components/FormHorns';
import Footer from './components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "DFbghj",
      image: "",
      descrition: "",
      numHorns: null,
      hornss: Data,
    }
  }



  showTheHornes = (horns) => {
    if (horns === "0") {
      this.setState({ numHorns: null })
    }
    else {
      console.log(horns);
      let result = Data.filter(item => item.horns===horns)
      this.setState({ numHorns: result })

      // console.log(result);


    }
  }



    handleClose = () => {
      this.setState({
        show: !this.state.show,
      })

    }

    handleSelcet = (title, descrition, image) => {

      this.setState({
        title: title,
        descrition: descrition,
        image: image
      })
    }



    render() {
      return (
        <div>
          <Header />
          <FormHorns

            showTheHornes={this.showTheHornes}
          />
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
