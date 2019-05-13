import React from 'react';
import $ from 'jquery';
import { Container, Button, Header, Image, Modal } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cover from "./Cover";
import Chapters from "./chapters/Chapters";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    this.enablePageScroll();

    const chapters = Chapters.map((chapter, index) => {
      return (
        <Route
          path={chapter.path}
          component={chapter.component}
          key={index} />);
    });

    return (
      <div>
        <Router>
          <Container text fluid className="main">
            <Route exact path="/" component={Cover} />
            {chapters}
            <Route path="/" component={Footer} chaptersCount={chapters.length} />
          </Container>
        </Router>
      </div >
    );
  }

  enablePageScroll() {
    $('body').bind('mousewheel', function (e) {
      var $div = $('.scrollable');

      $div.scrollTop($div.scrollTop()
        - e.originalEvent.wheelDelta);

      return false;
    });
  }
}

export default App;
