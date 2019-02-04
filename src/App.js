import React from 'react';
import $ from 'jquery';
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cover from "./Cover";
import ChapterOne from "./chapters/ChapterOne";
import ChapterTwo from './chapters/ChapterTwo';
import ChapterThree from "./chapters/ChapterThree";
import Footer from './Footer';

class App extends React.Component {
  render() {
    $('body').bind('mousewheel', function (e) {
      var $div = $('.scrollable');

      $div.scrollTop($div.scrollTop()
        - e.originalEvent.wheelDelta);

      return false;
    });

    return (
      <div>
        <Router>
          <Container text fluid className="main">
            <Route exact path="/" component={Cover} />
            <Route path="/1" component={ChapterOne} />
            <Route path="/2" component={ChapterTwo} />
            <Route path="/3" component={ChapterThree} />
            <Route path="/" component={Footer} />
          </Container>
        </Router>
      </div >
    );
  }
}

export default App;
