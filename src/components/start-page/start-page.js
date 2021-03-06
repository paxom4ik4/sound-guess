import React, { Component } from "react";
import "./start-page.css";
export default class StartPage extends Component {
  render() {
    return (
      <div className="start-page jumbotron">
        <h1 className="logo-txt">Sound Guess App</h1>
        <p>
          <span>Glad to see you on the start page of my application.</span>{" "}
          <br /> You have to listen to sounds from different categories and
          guess what these sounds are. <br />
          There are 6 categories in total:{" "}
          <ul>
            <li>Nature</li>
            <li>Public transport</li>
            <li>Transport</li>
            <li>Animals</li>
            <li>Birds</li>
            <li>Songs</li>
          </ul>{" "}
          They are all easy enough, but if necessary, you can turn on the
          console and see the current word. There is also a Training tab on the
          page. There you can view all the words as cards, listen to each and
          learn if you want (But it is available only on first stage of the
          game) Good luck!
        </p>
        <button
          className="btn btn-primary"
          onClick={(e) => this.props.onStart(e)}
        >
          Start
        </button>
      </div>
    );
  }
}
