import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './fullpage-main-section.css';
import ReactFullpage from "@fullpage/react-fullpage";

export class FullPageMainSection extends Component {
  render() {
    return (
      <ReactFullpage
        sectionsColor={["#ffffff", "#ffffff"]}
        render={
          (state, fullpageApi) => {
            return (
              <div id="fullpage-wrapper">
              </div>
            )
          }
        }
      />
    )
  }
}

ReactDOM.render(<FullPageMainSection />, document.getElementById("root"));
export default FullPageMainSection;
