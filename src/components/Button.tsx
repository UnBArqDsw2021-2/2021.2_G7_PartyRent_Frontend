import React from "react";

interface Props {
    title: string;
    color: string;
}
 
interface State {
    
}

class Button extends React.Component<Props, State> {
    render() { 
        return (  
            <button
            style = {{backgroundColor: this.props.color, color: 'white'}}
            >
                {this.props.title} 
            </button>
        );
    }
}
 
export default Button;