import React from 'react';
import { List } from "semantic-ui-react";

class References extends React.Component {
    render() {
        const references = this.props.references.map((reference, index) => {
            return (<List.Item as="h5" key={index}>{reference}</List.Item>);
        });

        return (
            <List>
                {references}
                <br />
            </List>
        );
    }
}

export default References;