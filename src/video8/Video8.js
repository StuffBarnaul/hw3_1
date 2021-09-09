import React, {Component} from "react";

class Video8 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log('constructor')
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
    }

    componentDidMount() {
        console.log('componentDidMount')
    }


    render() {
        return <>
            <div className={"App-link"}>Video8 - Class Component</div>
            <div>Nothing interesting to render</div>
        </>
    }
}

export default Video8