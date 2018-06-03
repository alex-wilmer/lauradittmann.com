import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import range from "lodash.range";

const width = window.innerWidth > 700 ? 200 : 100;
const pics = window.innerWidth > 700 ? 50 : 75;
const images = 21;

const blogSite = "http://www.lauradittmann.com/";

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
          <StackGrid
            className="logo-grid"
            gutterWidth={0}
            gutterHeight={0}
            columnWidth={width}
          >
            {range(0, pics).map(
              i =>
                i !== 8 ? (
                  <div
                    key={i}
                    style={{
                      width,
                      height: width,
                      fontSize: 0,
                    }}
                  />
                ) : (
                  <React.Fragment>
                    <div
                      className="clickable-logo"
                      onClick={() => (window.location.href = blogSite)}
                    >
                      ENTER
                    </div>
                    <div
                      className="logo-tile"
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
                        className={`logo-img ${this.state.fade ? "fade" : ""}`}
                        style={{
                          width: 100,
                        }}
                        src={process.env.PUBLIC_URL + "logo.png"}
                      />
                      <div className={`enter ${this.state.fade ? "fade" : ""}`}>
                        enter
                      </div>
                    </div>
                  </React.Fragment>
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
                  className="pic-tile"
                  style={{
                    width,
                    height: width,
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    transition: "backgroundColor 0.2s ease",
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
