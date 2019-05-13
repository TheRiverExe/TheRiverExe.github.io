import React from 'react';
import { Header } from "semantic-ui-react";

class SubHeader extends React.Component {
    render() {
        return (
            <Header className="centered" as="h3">{this.props.text}</Header>
        );
    }
}

export default SubHeader;