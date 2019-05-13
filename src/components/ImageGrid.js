import React from 'react';
import { Grid, Header, Image } from "semantic-ui-react";

class ImageGrid extends React.Component {
    render() {
        return (
            <div className="image-grid">
                <Grid divided="vertically">
                    <Grid.Row columns={this.props.columns}>
                        <Grid.Column>
                            <Image src={this.props.src1} fluid rounded />
                            <Header as="h4" textAlign="center" color="grey" className="mini-header">{this.props.text1}</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={this.props.src2} fluid rounded />
                            <Header as="h4" textAlign="center" color="grey" className="mini-header">{this.props.text2}</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={this.props.src3} fluid rounded />
                            <Header as="h4" textAlign="center" color="grey" className="mini-header">{this.props.text3}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br />
            </div>
        );
    }
}

export default ImageGrid;