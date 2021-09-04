import React from "react";
import HornedBeasts from "./HornedBeasts";
import SelectedBeast from "./SelectedBeast";
class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //  Data:this.props.showTheHornes
  //   }
  //   console.log(Data);
  //   if (horns === "0") {
  //     this.setState({ numHorns: null })
  //   }
  //   else {
  //     console.log(horns);
  //     let result = Data.filter(item => item.horns===horns)
  //     this.setState({ numHorns: result })

  //     // console.log(result);

  //   }
  // }
  render() {
    console.log(this.props.numHorns);
    return (
      <main>
        {this.props.numHorns.map((dataJson) => {
          return (
            <div>
              <HornedBeasts
                handleSelcet={this.props.handleSelcet}
                title={dataJson.title}
                image_url={dataJson.image_url}
                description={dataJson.description}
                handleClose={this.props.handleClose}
                showTheHornes={this.props.showTheHornes}
              />
              <SelectedBeast handleClose={this.props.handleClose} />
            </div>
          );
        })}
      </main>
    );
  }
}
export default Main;
