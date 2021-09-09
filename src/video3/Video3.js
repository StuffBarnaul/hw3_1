import React, {Component} from "react";
import Counter from "./Counter";

class Video3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 10,
            showError: false,
        }
    }

    mountCounter = () => this.setState({mount: true})
    unmountCounter = () => this.setState({mount: false})
    ignoreProp = () => this.setState({ignoreProp: Math.random})
    seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)})
    toggleError = () => this.setState({showError: !this.state.showError})

    render() {
        return (
            <>
                <div className={"App-link"}>Video3 - Class Component</div>
                <div>
                    <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
                    <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
                </div>
                <div>
                    <button onClick={this.ignoreProp}>Ignore Prop</button>
                    <button onClick={this.seedGenerator}>Seed Generator</button>
                    <button onClick={this.toggleError}>Toggle Error</button>
                </div>
                {this.state.mount &&
                <Counter ignoreProp={this.state.ignoreProp}
                         seed={this.state.seed}
                         showError={this.state.showError}/>
                }
            </>
        )
    }
}

export default Video3;