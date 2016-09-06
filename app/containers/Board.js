import React,{Component, PropTypes} from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import Cupcake from '../components/board/Cupcake';
import Hexagon from '../components/board/Hexagon';

const MeshFactory = React.createFactory(ReactTHREE.Mesh);
/**
 *
 */
export default class Board extends Component {
    static propTypes = {
        seed: PropTypes.string
    };
    render() {
        this.props ={
            id:'board',
            width:window.innerWidth,
            height:window.innerHeight,
        cupcakedata:{position:new THREE.Vector3(0,0,0), quaternion:new THREE.Quaternion()},
        cupcakedata2:{position:new THREE.Vector3(0,0,0), quaternion:new THREE.Quaternion()}
    };
        var MainCameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,
            {
                name:'maincamera',
                fov:'75',
                aspect:this.props.width/this.props.height,
                near:1,
                far:5000,
                position:new THREE.Vector3(300,300,300),
                lookat:new THREE.Vector3(0,0,0)
            }
        );

        return React.createElement(
            ReactTHREE.Renderer,
            this.props,
            React.createElement(
                ReactTHREE.Scene,
                {
                    width:this.props.width,
                    height:this.props.height,
                    camera:'maincamera',
                    orbitControls:THREE.OrbitControls
                },
                MainCameraElement,
                React.createElement(Cupcake, this.props.cupcakedata)
            )
        );
        //return
    }
}

var cupcakestart = function() { // eslint-disable-line no-unused-vars
    var renderelement = document.getElementById("board");

    var w = window.innerWidth-6;
    var h = window.innerHeight-6;

    var sceneprops = {width:w, height:h,
        cupcakedata:{position:new THREE.Vector3(0,0,0), quaternion:new THREE.Quaternion()},
        cupcakedata2:{position:new THREE.Vector3(0,0,0), quaternion:new THREE.Quaternion()}
    };
    var cupcakeprops = sceneprops.cupcakedata;
    var cupcakeprops2 = sceneprops.cupcakedata2;
    var rotationangle = 0;

    ReactTHREE.render(React.createElement(Board,sceneprops), renderelement);

    function spincupcake(t) {
        rotationangle = t * 0.001;
        cupcakeprops.quaternion.setFromEuler(new THREE.Euler(rotationangle,rotationangle*3,0));
        cupcakeprops.position.x = 300  * Math.sin(rotationangle);
        cupcakeprops2.quaternion.setFromEuler(new THREE.Euler(rotationangle,rotationangle*3,0));
        cupcakeprops2.position.x = 300  * Math.sin(-rotationangle);

        ReactTHREE.render(React.createElement(Board,sceneprops), renderelement);

        requestAnimationFrame(spincupcake);
    }

    spincupcake();
};
