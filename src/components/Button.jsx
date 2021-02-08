import React from 'react';

class Button extends React.Component {
    render() {
        return (
                <button className="btn btn-primary" 
                       onClick={this.props.onClickButton}>
                    {this.props.children}
                </button>
            
        )
    };
}

export default Button;
