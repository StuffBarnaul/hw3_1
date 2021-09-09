import React, {Component} from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            seed: 0
        }
        this.inc = () => this.setState({counter: this.state.counter + 1})
        this.dec = () => this.setState({counter: this.state.counter - 1})
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.state.ignoreProp !== nextProps.ignoreProp) {
            console.log("Component rerender")
            return false
        }
        console.log("Component not rerender")
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        this.setState({error, errorInfo})
    }

    render() {
        console.log('render', this.state.error)
        if (this.props.showError && this.state.error) {
            return <div>Some error {this.state.error}</div>
        }
        return <>
            <button onClick={this.dec}>-</button>
            <button onClick={this.inc}>+</button>
            <div>Counter: {this.state.counter}</div>
            {/*{this.props.showError ? <ErrorComponent/> : null}*/}
        </>
    }

}

export default Counter;