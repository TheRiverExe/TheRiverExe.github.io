import React from 'react';

class Chapter extends React.Component {
    render() {
        return (
            <div className="chapter scrollable justified">
                {this.props.content}
            </div>
        );
    }
}

export default Chapter;