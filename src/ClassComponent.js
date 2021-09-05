import React, {Component} from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            q1: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return state;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    handler = () => {
        let val = this.state.q1
        val++
        this.setState({q1: val})
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.handler}>Button</button>
                </div>
                <div>{this.state.q1}</div>
                <div>{this.props.q2}</div>
            </>
        )
    }
}

export default ClassComponent;