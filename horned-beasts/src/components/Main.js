import React from "react";
import HornedBeasts from './HornedBeasts';
import Data from '../assets/data.json';
class Main extends React.Component {

  render() {
    return (
      <main>
        {Data.map((dataJson, i) => {
          return <div>
            <HornedBeasts
              title={dataJson.title}
              image_url={dataJson.image_url}
              description={dataJson.description}
            />
          </div>
        })}

      </main>


    )
  }
}
export default Main;