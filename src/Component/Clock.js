import React,{Component} from "react";

class Clock extends Component{   /*时钟组件*/
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount(){
        // 装载定时器
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        // 卸载定时器
        clearInterval(this.timerID);
    }

    render(){
        return <div id={"time"}>{this.state.date.toLocaleString()}</div>;
    }
}
export default Clock