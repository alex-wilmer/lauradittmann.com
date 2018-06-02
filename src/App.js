import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import range from "lodash.range";

const width = window.innerWidth > 700 ? 200 : 100;
const pics = window.innerWidth > 700 ? 50 : 75;
const images = 21;

class App extends Component {
  state = { fade: false };
  componentDidMount() {
    setTimeout(() => this.setState({ fade: true }), 1500);
  }
  render() {
    return (
      <div className={`bg ${this.state.fade ? "fade" : ""}`}>
        <div
          className="logo-layer"
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            zIndex: 100,
          }}
        >
          <StackGrid gutterWidth={0} gutterHeight={0} columnWidth={width}>
            {range(0, pics).map(
              i =>
                i !== 10 ? (
                  <div key={i} style={{ width, height: width, fontSize: 0 }} />
                ) : (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "white",
                      width,
                      height: width,
                      overflow: "hidden",
                      fontSize: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{
                        width: 100,
                      }}
                      src={process.env.PUBLIC_URL + "logo.png"}
                    />
                  </div>
                ),
            )}
          </StackGrid>
        </div>
        <div className={`grid-cnt ${this.state.fade ? "fade" : ""}`}>
          <StackGrid
            gutterWidth={0}
            gutterHeight={0}
            columnWidth={width}
            monitorImagesLoaded
          >
            {range(0, pics).map(i => (
              <div key={i} style={{ fontSize: 0, position: "relative" }}>
                <div
                  style={{
                    width,
                    height: width,
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                />
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
