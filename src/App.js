import React from 'react';
import $ from 'jquery';
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cover from "./Cover";
import ChapterOne from "./chapters/ChapterOne";
import ChapterTwo from './chapters/ChapterTwo';
import Header from './Header';

class App extends React.Component {
  render() {
    $('body').bind('mousewheel', function (e) { // on scroll
      var $div = $('.scrollable');

      // set div scroll top offset to current + extra from this scroll
      $div.scrollTop($div.scrollTop()
          - e.originalEvent.wheelDelta);

      return false; // prevent body scrolling
  });

    return (
      <div>
        <Router>
          <Container text fluid className="main">            
            <Route exact path="/" component={Cover} />
            <Route path="/1" component={ChapterOne} />
            <Route path="/2" component={ChapterTwo} />
            <Route path="/" component={Header} />
          </Container>
        </Router>
      </div >
    );
  }
}

export default App;
