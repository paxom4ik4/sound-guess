import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  PublicTransport,
  Transport,
  Nature,
  Animals,
  Birds,
  Songs,
} from "../constants";
import "./training-mode.css";
import Player from "../player";
export default class Training extends Component {
  render() {
    const data = [
      ...Nature,
      ...PublicTransport,
      ...Transport,
      ...Animals,
      ...Birds,
      ...Songs,
    ];
    const trainingItems = data.map((item, id) => {
      const { imgSrc, audSrc, name, desc } = item;
      return (
        <li className="list-group-item list-item" key={id}>
          <div className="training-header">
            <img className="img training-img" src={imgSrc} alt="picture" />
            <p className="training-name">{name}</p>
          </div>
          <p className="training-desc">{desc}</p>
          <Player src={audSrc} />
        </li>
      );
    });
    return (
      <React.Fragment>
        <div className="training" onClick={() => scroll.scrollToTop()}>
          <Link
            activeClass="active"
            to="training"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          />
          <div className="jumbotron training">
            <div className="training-close">
              <span style={{ textAlign: "center" }}>
                You can learn the items here! <br />
                Click on Container to slide up
              </span>
              <span className="close-item" onClick={() => this.props.onClose()}>
                <i class="fas fa-times"></i>
              </span>
            </div>
            <ul className="list-group training-list">{trainingItems}</ul>
            <span className="close-item" onClick={() => this.props.onClose()}>
              <button class="btn btn-primary">Return to Game Mode</button>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
