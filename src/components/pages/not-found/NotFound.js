import React, {Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>That's a 404, yo!</h1>
        <p>
          That page wasn't found. We'll create it soon, perhaps. In the
          meantime, wanna go <Link to="/">Home</Link>?
        </p>
      </React.Fragment>
    );
  }
}

export default NotFound;
