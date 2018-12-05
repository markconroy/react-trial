import React, {
  Component
} from "react";
import logo from "../../../logo.svg";
import MainMenu from '../main-menu/MainMenu';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://mark.ie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark.ie
          </a>
        </header>
        <MainMenu />
      </React.Fragment>
    );
  }
}

export default Header;