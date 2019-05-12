import React from 'react';

class Quote extends React.Component {
    render() {
        return (
            <div>
                <p className="quote">{this.props.text}</p>
                <p className="quote-credit>">{this.props.credit}</p>
            </div>
        );
    }
}

export default Quote;