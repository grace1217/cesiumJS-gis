
import React, { Component } from 'react';
import logo from '../logo.svg';

class SAP extends Component {
    constructor() {
        super();
        this.state = [{display:"block"},{visibility: "hidden"},{disp: "block"},{data:new Date()}];/*两个函数状态控制*/
        this.handleClick=this.handleClick.bind(this)
        this.handleClick2=this.handleClick2.bind(this)
        this.handleClick1=this.handleClick1.bind(this)
    }

    handleClick() {

        this.setState({display:this.state.display==="block"?"none":"block"

        });


    }
    handleClick1(){
        this.setState({disp:this.state.disp==="block"?"none":"block"/*控制框显示隐藏*/

        });
    }
    handleClick2(){
        this.setState({visibility:this.state.visibility==="hidden"?"visible":"hidden" /*控制框显示隐藏*/
        });
    }
    render(){
        return(<div id="box" style={{display:this.state.display}}> {/*<点击消失>*/}
            <div id="box-left">
                <ul>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">基础功能</a>
                        <div className="dropdown-content">
                            <p className="a">ss</p>
                            <p className="a">dd</p>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="#" class="dropbtn">图片展示</a>
                        <div className="dropdown-content">
                            <p className="a">ss</p>
                            <p className="a">dd</p>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" class="dropbtn">其他</a>
                        <div className="dropdown-content">
                            <p class="a">ss</p>
                            <p class="a">dd</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="box-middle">
                <img src={logo} className="big-logo" alt="logo" />
                <div id="box-middle-right">
                    <button className="login" onClick={this.handleClick1} >注册</button>
                    <button className="login" onClick={this.handleClick2}>登陆</button>{/*显示登陆框*/}
                </div>
                <div id={"shuru"} style={{visibility:this.state.visibility}}>
                    用户名：<input type={"text"}/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;码：<input type={"text"}/>
                    <br/> <br/>
                    <button className="login" onClick={this.handleClick}>提交</button>
                </div>

                <div id={"shuru1"} style={{display:this.state.disp}}>
                    登陆邮箱：&nbsp;&nbsp;&nbsp;<input type={"text"}/>
                    <br/>
                    设置密码：&nbsp;&nbsp;&nbsp;<input type={"text"}/>
                    <br/>
                    确认密码：&nbsp;&nbsp;&nbsp;<input type={"text"}/>
                    <br/>
                    设置用户名：<input type={"text"}/>
                    <br/>
                    <br/>
                    <button className="login"onClick={this.handleClick1}>注册 </button>
                </div>
                <p id="success"  style={{opacity: (this.state.opacity!="0")?"0":"1"}}>注册成功</p>

            </div>

            <div id="box-right">
                <p className="text">项目简介:</p>
                <p className="text">本项目自2018年7月9日起实施，项目组成员通过多方面调研，最终确定利用支持3D技术gis开源前端框架CesiumJS实现，主要完成的功能包括：3D可视化模型、楼宇模型、热力图</p>
            </div>
                <footer>
                    苏州移动研究所
                    项目成员：顾志晖，柯亮，顾优雅，赵彤
                </footer>
        </div>

        )

    }
}

export default SAP;