import React from "react";

export default class ClassBasedComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        }

        setInterval(() => {
            this.setState({
                timer: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
            })
        }, 1000);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div>
                <h1>The Current Time is: {this.state.timer}</h1>
            </div>
        )
    }
}