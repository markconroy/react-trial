import React, {
  Component
} from 'react';

import './App.css';
import Header from './components/global/header/Header';
import Router from "./components/global/router/Router";
import Footer from "./components/global/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;