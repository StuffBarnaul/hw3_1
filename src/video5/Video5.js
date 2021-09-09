import React, {Component} from "react";

class Video5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }

    render() {
        return<>
            <div className={"App-link"}>Video5 - Class Component</div>
            <div>Deprecated methods</div>
        </>
    }
}

export default Video5