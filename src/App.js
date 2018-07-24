import React, { Component } from 'react';
/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/
import './App.css';
import logo from './logo.svg';
import SAP from "./Component/SAP"
import Clock from "./Component/Clock"
import SAP2  from './Component/SAP2'


class App extends Component {  
    

    render() {
        return (
                <div>
                    <div className="App">
                        <header className="App-header">
                            <h1 className="App-title">白金组</h1>
                            <h3 className="App-title">gis可视化设计项目</h3>
                            <p className="App-logo-name">中国移动</p>
                            <img src={logo} className="App-logo" alt="logo" />
                            <Clock/>
                        </header>
                        <SAP/>
                       <SAP2/>
                        <footer>
                            苏州移动研究所
                            项目成员：顾志晖，柯亮，顾优雅，赵彤
                        </footer>
                    </div>

                </div>

        );
    }
}

export default App