import React, {Component} from "react";

class Video7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
        this.press = this.press.bind(this)
    }

    press() {
        // Some method
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentDidUnmount')
    }

    render() {
        return <>
            <div className={"App-link"}>Video7 - Class Component</div>
            <div>Nothing interesting to render</div>
        </>
    }
}

export default Video7