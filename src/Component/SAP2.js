import React,{Component}from "react"
import Home from './Home'
import Trag from './Trag'
import Thermo from './Thermo'
import TDsphere from './TDsphere'
import instruction from './instruction'
import versionUp from './versionUp'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class SAP2 extends Component{
    constructor(props) {
        super(props);
        this.state = [{display:"none"},{visibility: "hidden"},{disp:"none"}, {date: new Date()}];
        this.handleClick1=this.handleClick1.bind(this)
        this.handleClick2=this.handleClick2.bind(this)
        /*this.handleClick3=this.handleClick3.bind(this)*/
    }
    handleClick1() {
        this.setState({display:this.state.display=="none"?"block":"none"});
    }
    handleClick2() {
        this.setState({visibility:this.state.visibility==="hidden"?"visible":"hidden"});
    }
   /* handleClick3() {
        this.setState({disp:this.state.disp=="none"?"block":"none"})
    }*/

    render(){
        return(

            <Router>

                <div>
                    <div id="box2"   >
                        {/* <div id="box2"  onMouseOver={this.handleMouseover}  style={{visibility:this.state.visibility}}*/}
                        <div id="box2-left">
                            <div className="shadow">
                                <a href={""}>首页</a>

                            </div>
                            <div  className="shadow"onClick={this.handleClick1.bind(this)}>
                                功能
                            </div>
                            <div id={"sp"}   style={{display:this.state.display}}>{/*第二页面*/}
                                <ul>
                                    <li><Link to="/">楼宇图</Link></li>
                                    <li><Link to="/traj">人员行走路径</Link></li>
                                    <li><Link to="/thermo">热力图</Link></li>
                                    <li><Link to="/TDsphere">3D球型图</Link></li>
                                </ul>

                               {/* <span className="span">楼宇图</span>
                                <span className="span">热力图</span>
                                <span className="span">3D球型图</span>
                                <span className="span">人员行走路径</span>*/}
                            </div>
                            <div className="shadow"onClick={this.handleClick2.bind(this)}>
                                其他

                            </div>
                            <div   id="qita"style={{visibility:this.state.visibility}}>  {/*使用不同显示方式*/}

                                <li><Link to="/instruction">使用说明</Link></li>
                                <li><Link to="/versionUp">版本维护</Link></li>
                               {/* <span className="span">使用说明</span>
                                <span className="span">版本维护</span>*/}
                            </div>

                        </div>
                        {/*新添加的*/}
                        <div id={"box2-shuju"}>
                            <div id={"showGIS"}>
                                <div id={"welcome"}>欢迎您admin!用户</div>
                                <hr />
                                <Route exact path="/" component={Home} />
                                <Route path="/traj" component={Trag} />
                                <Route path="/thermo" component={Thermo} />
                                <Route path="/TDsphere" component={TDsphere} />
                                <Route path="/instruction" component={instruction} />
                                <Route path="/versionUp" component={versionUp} />
                            </div>
                        </div>
                    </div>

                </div>
            </Router>


        )
    }

}
export default SAP2;