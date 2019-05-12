import React from 'react';
import { Image } from "semantic-ui-react";

class BigImage extends React.Component {
    render() {
        return (
            <Image src={this.props.src} fluid rounded />
        );
    }
}

export default BigImage;