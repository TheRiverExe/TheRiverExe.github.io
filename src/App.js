import React, { Component } from 'react';
import './App.css';
import { Container } from "semantic-ui-react";
import { Route, HashRouter, Redirect } from 'react-router-dom';

import ChapterOne from "./chapters/ChapterOne";
import ChapterTwo from './chapters/ChapterTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Container text fluid>
            <Redirect to='/one' />
            <Route exact path="/one" component={ChapterOne} />
            <Route exact path="/two" component={ChapterTwo} />
          </Container>
        </HashRouter>
      </div >
    );
  }
}

export default App;
