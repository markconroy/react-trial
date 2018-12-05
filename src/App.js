import React, {
  Component
} from 'react';

import './App.css';
import Header from './components/global/header/Header';
import Router from "./components/global/router/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;