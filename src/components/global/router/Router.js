import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Blog from "../../pages/blog/Blog";
import Contact from "../../pages/contact/Contact";
import NotFound from "../../pages/not-found/NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/:blogid" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;