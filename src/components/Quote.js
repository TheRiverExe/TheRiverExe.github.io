import React from 'react';

class Quote extends React.Component {
    render() {
        return (
            <div className="quote">
                <p className="text">{this.props.text}</p>
                <p className="credit>">{this.props.credit}</p>
            </div>
        );
    }
}

export default Quote;