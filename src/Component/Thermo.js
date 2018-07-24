import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

class Thermo extends Component{
	componentDidMount() {
        this.viewer = new Viewer(this.cesiumContainer,{
					geocoder: true,
		    homeButton: true,
		    sceneModePicker: true,
		    baseLayerPicker: true,
		    navigationHelpButton: true,
		    animation: true,
		    timeline: true,
		    fullscreenButton: false,
		    vrButton: true
	        }
        );
    }
	render(){
		return(
			<div >
				<h2>Thermo</h2>
				<div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
			</div>
		)
	}
}

export default Thermo;