import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import range from "lodash.range";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";

const width = window.innerWidth > 700 ? 200 : 100;
const tiles = window.innerWidth > 700 ? 50 : 75;
const images = 21;

const links = {
  tile1:
    "https://www.instagram.com/p/BgNlR2AlSAp/?hl=en&taken-by=lauradittmann",
  tile2:
    "https://www.instagram.com/p/BjgcrtxlUVc/?hl=en&taken-by=lauradittmann",
  tile3:
    "https://www.instagram.com/p/BjGMEjGlpUe/?hl=en&taken-by=lauradittmann",
  tile5:
    "https://www.instagram.com/p/Bhm58WSFhd-/?hl=en&taken-by=lauradittmann",
  tile6:
    "https://www.instagram.com/p/Bg1OfVggvxy/?hl=en&taken-by=lauradittmann",
  tile8:
    "https://www.instagram.com/p/Bfbwb2hArJ3/?hl=en&taken-by=lauradittmann",
  tile9:
    "https://www.instagram.com/p/BfCnh5EgWvn/?hl=en&taken-by=lauradittmann",
  tile11:
    "https://www.instagram.com/p/BXtqyvkgLwM/?hl=en&taken-by=lauradittmann",
  tile12:
    "https://www.instagram.com/p/BWbSbfpA6aJ/?hl=en&taken-by=lauradittmann",
};

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
            {range(0, tiles).map(
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
            {range(0, tiles).map(i => (
              <div key={i} style={{ fontSize: 0, position: "relative" }}>
                <a
                  {...(links["tile" + ((i % images) + 1)]
                    ? {
                        href: links["tile" + ((i % images) + 1)],
                        target: "_blank",
                      }
                    : {})}
                >
                  <div
                    className="pic-tile"
                    style={{
                      width,
                      height: width,
                      position: "absolute",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      transition: "backgroundColor 0.2s ease",
                    }}
                  >
                    <FontAwesomeIcon
                      className={`insta-icon ${
                        links["tile" + ((i % images) + 1)] ? "show" : ""
                      }`}
                      css={`
                        font-size: 40px;
                        color: white;
                        cursor: pointer;
                      `}
                      icon={faInstagram}
                    />
                  </div>
                  <img
                    style={{ width, height: width }}
                    src={
                      process.env.PUBLIC_URL +
                      "tile" +
                      ((i % images) + 1) +
                      ".png"
                    }
                  />
                </a>
              </div>
            ))}
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default App;
