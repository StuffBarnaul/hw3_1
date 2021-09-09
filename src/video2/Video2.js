import React, {Component} from "react";

class Video2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.setState((state) => ({
                date: new Date(),
                counter: state.counter+1
            }));
        }, 1000)
    }

    componentWillUnmount() {
        console.log('componentDidUnmount')
        clearInterval(this.timer)
    }


    handler = () => {
        let val = this.state.q1
        val++
        this.setState({q1: val})
    }

    render() {
        return (
            <>
                <div className={"App-link"}>Video2 - Class Component</div>
                <div>{this.state.counter}</div>
                <div>{this.state.date.toLocaleString()}</div>
            </>
        )
    }
}

export default Video2;