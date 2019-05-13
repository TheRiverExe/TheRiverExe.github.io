import React from 'react';
import { Button, Container, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        let prevPath = "/" + (Number(this.props.location.pathname.split("/")[1]) - 1);
        prevPath = prevPath === "/0" ? "/" : prevPath;

        const nextPath = "/" + (Number(this.props.location.pathname.split("/")[1]) + 1);

        return (
            <Container text className="footer centered">
                <Divider />
                <Button basic color="grey" circular icon="chevron left" as={Link} to={prevPath} disabled={this.props.location.pathname === "/"} />
                <Button basic color="grey" circular icon="tree" as={Link} to="/" disabled={this.props.location.pathname === "/"} />
                <Button basic color="grey" circular icon="chevron right" as={Link} to={nextPath} disabled={this.props.location.pathname === `/8`} />
            </Container>
        );
    }
}

export default Footer;