import React, { Component } from 'react';
import './App.css';
import { Container } from "semantic-ui-react";

import ChapterOne from "./chapters/ChapterOne";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container text fluid>
          <ChapterOne />
        </Container>
      </div >
    );
  }
}

export default App;
