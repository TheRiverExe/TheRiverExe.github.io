import React, { Component } from 'react';
import { Header, Image } from "semantic-ui-react";
import * as cover from "./media/cover.png";

class Cover extends Component {
    render() {
        return (
            <div className="centered scrollable">
                <Header as="h2" className="blue">The Meeting of the Water</Header>
                <Header as="h3">A journey from the source of The River Exe to the sea</Header>
                <Header as="h3">Peter Conridge</Header>
                <Image rounded centered src={cover} />
            </div>
        );
    }
}

export default Cover;