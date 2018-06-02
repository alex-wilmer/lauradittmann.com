import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import range from "lodash.range";

const width = window.innerWidth > 700 ? 200 : 100;
const images = 16;

class App extends Component {
  state = { fade: false };
  componentDidMount() {
    setTimeout(() => this.setState({ fade: true }), 1000);
  }
  render() {
    return (
      <div className={`bg ${this.state.fade ? "fade" : ""}`}>
        <div className={`logo ${this.state.fade ? "fade" : ""}`}>
          <div className="name">
            <img
              style={{ width: 100 }}
              src={process.env.PUBLIC_URL + "logo.png"}
            />
          </div>
        </div>
        <div className={`grid-cnt ${this.state.fade ? "fade" : ""}`}>
          <StackGrid
            gutterWidth={-1}
            gutterHeight={-5}
            columnWidth={width}
            monitorImagesLoaded
          >
            {range(0, 40).map(i => (
              <div key={i}>
                <img
                  style={{ width, height: width }}
                  src={
                    process.env.PUBLIC_URL +
                    "tile" +
                    ((i % images) + 1) +
                    ".png"
                  }
                />
              </div>
            ))}
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default App;
