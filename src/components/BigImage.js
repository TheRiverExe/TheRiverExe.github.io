import React from 'react';
import { Header, Image, Segment } from "semantic-ui-react";

class BigImage extends React.Component {
    render() {
        return (
            <div>
                <Image src={this.props.src} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">{this.props.text}</Header>
                </Segment>
            </div>
        );
    }
}

export default BigImage;