import React,{Component, PropTypes} from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

var assetpath = function(filename) { return '../assets/' + filename; };

var MeshFactory = React.createFactory(ReactTHREE.Mesh);

//
// Cupcake component is two cube meshes textured with cupcake textures
//

var boxgeometry = new THREE.BoxGeometry( 200,200,200);

var cupcaketexture = THREE.ImageUtils.loadTexture( assetpath('cupCake.png') );
var cupcakematerial = new THREE.MeshBasicMaterial( { map: cupcaketexture } );

var creamtexture = THREE.ImageUtils.loadTexture( assetpath('creamPink.png') );
var creammaterial = new THREE.MeshBasicMaterial( { map: creamtexture } );

var Cupcake = React.createClass({
    displayName: 'Cupcake',
    propTypes: {
        position: React.PropTypes.instanceOf(THREE.Vector3),
        quaternion: React.PropTypes.instanceOf(THREE.Quaternion).isRequired
    },
    render: function() {
        return React.createElement(
            ReactTHREE.Object3D,
            {quaternion:this.props.quaternion, position:this.props.position || new THREE.Vector3(0,0,0)},
            MeshFactory({position:new THREE.Vector3(0,-100,0), geometry:boxgeometry, material:cupcakematerial}),
            MeshFactory({position:new THREE.Vector3(0, 100,0), geometry:boxgeometry, material:creammaterial})
        );
    }
});

export default Cupcake;