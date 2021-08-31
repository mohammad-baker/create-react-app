import React from "react";
import HornedBeasts from './HornedBeasts';
import Data from '../assets/data.json';
import SelectedBeast from './SelectedBeast';
class Main extends React.Component {

  render() {
    return (
      <main>
        {Data.map((dataJson, i) => {
          return <div>
            
            <HornedBeasts
        handleSelcet={this.props.handleSelcet}

              title={dataJson.title}
              image_url={dataJson.image_url}
              description={dataJson.description}
                            handleClose={this.props.handleClose}

            />
            <SelectedBeast
            
                      handleClose={this.props.handleClose}

            />
          </div>
        })}

      </main>


    )
  }
}
export default Main;