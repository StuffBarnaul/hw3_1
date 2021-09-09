import React, {Component} from "react";

class Video4 extends Component {

    constructor(props) {
        super(props);
        const date = new Date()
        this.state = {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours(),
        }
    }

    tick = () => {
        console.log('tick')
        const date = new Date()
        this.setState({
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours(),
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }

    render() {
        const {seconds, minutes, hours} = this.state
        const s = seconds * 6
        const m = minutes * 6 + 6 * seconds / 60
        const h = hours % 12 * 30 + 6 * minutes / 60
        return (
            <>
                <div className={"App-link"}>Video4 - Class Component</div>
                <div className={"clock"}>
                    <div className={"clock-seconds"}
                         style={{transform: 'rotate(' + s + 'deg)'}}>
                    </div>
                    <div className={"clock-minutes"}
                         style={{transform: 'rotate(' + m + 'deg)'}}>
                    </div>
                    <div className={"clock-hours"}
                         style={{transform: 'rotate(' + h + 'deg)'}}>
                    </div>
                </div>
            </>
        )
    }
}

export default Video4;