define(
    ['THREE'],
    function(THREE){
        /**
         * Constructor.
         * @param canvasElement
         * @constructor
         */
        var Game = function(canvasElement) {
            var scene, camera, renderer;
            var geometry, material, mesh;


            this.init = function init() {

                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
                camera.position.z = 1000;


                geometry = new THREE.BoxGeometry(200, 200, 200);
                material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});

                mesh = new THREE.Mesh(geometry, material);
  //              scene.add(mesh);

                renderer = new THREE.WebGLRenderer({canvas: canvasElement});
                renderer.setSize(window.innerWidth, window.innerHeight);

                //document.body.appendChild(renderer.domElement);

            };

            this.animate = function animate() {

                requestAnimationFrame(animate);
/*
                mesh.rotation.x += 0.02;
                mesh.rotation.y += 0.02;
*/
                renderer.render(scene, camera);

            };

            this.scene = scene;
        };
        return Game;
    });