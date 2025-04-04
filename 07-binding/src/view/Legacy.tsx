import * as React from "react";

export class Legacy extends React.Component<object, object> {
    //text = 'hello';
    state = {
        text: 'hello'
    }

    render() {
        return (<>
            <h1>Legacy Component {this.state.text}</h1>
            <button onClick={() => {
                this.setState({text: Math.random() + ""})
                // this.forceUpdate();
            }}>
                Change Text
            </button>
        </>);
    }
}