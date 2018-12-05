import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div class="main-menu">
        <ul class="main-menu__menu">
          <li class="main-menu__menu-item"><Link to="/">Home</Link></li>
          <li class="main-menu__menu-item"><Link to="/about">About</Link></li>
          <li class="main-menu__menu-item"><Link to="/blog">Blog</Link></li>
          <li class="main-menu__menu-item"><Link to="/contact">Contact</Link></li>
          <li class="main-menu__menu-item"><Link to="/markie">404 Link</Link></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;