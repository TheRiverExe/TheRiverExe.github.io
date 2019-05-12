import React from 'react';
import { Header } from "semantic-ui-react";

class ChapterHeader extends React.Component {
    render() {
        return (
            <Header as="h1">{this.props.text}</Header>
        );
    }
}

export default ChapterHeader;