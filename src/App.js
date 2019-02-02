import React from 'react';
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cover from "./Cover";
import ChapterOne from "./chapters/ChapterOne";
import ChapterTwo from './chapters/ChapterTwo';
import Header from './Header';

class App extends React.Component {
  render() {
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
