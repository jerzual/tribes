
var THREE = require('three');
var dat=require('dat-gui');
var RNG = require('rng-js');
var FastSimplexNoise = require('fast-simplex-noise');
var Game=require('./Game');
function initDom() {

    var canvas = document.getElementById('tribes');
    var game = new Game(canvas);
    game.init();
    window.game = game;

    var DebugControls = function () {
        var randomSeed = function () {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
                rseed = '';
            for (var i = 0; i < 8; i++) {
                rseed += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return rseed;
        };

        this.generate = function () {
            console.log('new rng with seed:' + this.seed);
            game.rng = new RNG(this.seed);
        };

        this.seed = randomSeed();
        //this.speed = 0.8;
        //this.displayOutline = false;
        //this.explode = function() {  };
        // Define render logic ...
    };

    var controls = new DebugControls();
    controls.generate();

    var options = {
        frequency: 0.01,
        octaves: 8,
        mapWidth: 32,
        mapHeight: 32,
        seaLevel: 128,
        random: function () {
            return game.rng.random()
        },
        //random: DebugControls.prototype.rng.random,
        createMap: function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.mapWidth;
            canvas.height = this.mapHeight;
            var ctx = canvas.getContext("2d");

            var noiseGen = new FastSimplexNoise(this);
            var grid = new Array(canvas.width);
            for (var x = 0; x < grid.length; x++) {
                grid[x] = new Array(canvas.height);
                for (var y = 0; y < grid[x].length; y++) {
                    grid[x][y] = noiseGen.get2DNoise(x, y);
                    //console.log(x + '' + y + ' : ' + grid[x][y])
                    //transforms (-1,1) range given by noiseGen to (0,255)
                    var shadeOfGrey = Math.floor(255 * (grid[x][y] + 1) / 2);

                    if (shadeOfGrey < this.seaLevel)
                        ctx.fillStyle = "rgb(" + shadeOfGrey / 2 + "," + shadeOfGrey / 2 + ",128)";
                    else
                        ctx.fillStyle = "rgb(" + shadeOfGrey + "," + shadeOfGrey + "," + shadeOfGrey + ")";
                    ctx.fillRect(x, y, 1, 1);
                }
            }


            document.getElementById('map').appendChild(canvas);
        },
        clear: function () {
            document.getElementById('map').innerHTML = '';
        },
        create3DMap: function () {
            /**
             * move lighting to init
             scene.add(news THREE.AmbientLight({
                color: 0x666666
            }));
             */

//objects in the scene
//var geometry = new THREE.CubeGeometry(1,1,1);
            var groundMaterial = new THREE.MeshBasicMaterial({
                color: 0xccffcc, shading: THREE.FlatShading, side: THREE.DoubleSide, overdraw: true
            }), material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
            /*,
             waterMaterial = new THREE.MeshBasicMaterial({
             color: 0xccccff
             })*/

//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

//terrain
            var terrain = {
                    width: this.mapWidth,
                    height: this.mapHeight,
                    segments: 12
                },
            /*waterGeometry = new THREE.PlaneGeometry(
             terrain.width,
             terrain.height,
             terrain.segments,
             terrain.segments),*/
                groundGeometry = new THREE.PlaneBufferGeometry(
                    terrain.width,
                    terrain.height,
                    terrain.width,
                    terrain.height);
            groundGeometry.verticesNeedUpdate = true;
            var index = 0;
            var noiseGen = new FastSimplexNoise(this);
            for (var i = 0; i <= terrain.width; i++) {
                for (var j = 0; j <= terrain.height; j++) {

                    //console.log(groundGeometry.vertices[index]);
                    groundGeometry.vertices[index].setZ(noiseGen.get2DNoise(i, j) * 255);
                    //randomize z by multiplying by a random between -1 and 1
                    // groundGeometry.vertices[index].position.z = z * (Math.random() * 2 - 1);
                    index++;
                }
            }
            var ground = new THREE.Mesh(groundGeometry, material);
            game.scene.add(ground);
        }
    };
    var gui = new dat.GUI();
    gui.add(controls, 'seed');
    gui.add(controls, 'generate');
    gui.add(options, 'frequency', -1, 1);
    gui.add(options, 'octaves');
    gui.add(options, 'seaLevel', 0, 255);
    gui.add(options, 'mapWidth', 16, 1024);
    gui.add(options, 'mapHeight', 16, 1024);
    gui.add(options, 'createMap');
    gui.add(options, 'create3DMap');
    gui.add(options, 'clear');

    game.animate();
    window.game = game;

};

document.addEventListener('DOMContentLoaded',initDom);