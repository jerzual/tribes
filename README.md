# Tribes

A real-time strategy game on a planetary level with rogue like elements.

## Main features / design goals

Population simulation, resource management.
Isometric view, Hexagon tiles, low poly/cell-shading style.

docs/inspiration :

Three.js : orthographic view http://threejs.org/examples/canvas_camera_orthographic.html

## World generation

### Hex 

is the atomic unit of the game map.
hexagon shaped / grid location stored

http://www.redblobgames.com/grids/hexagons/ 

### Chunck
a chunk is a triangle polygon
it's an hex 'loading' container.
6 chuncks composes an hexagon on the world map.

### Planets 
Planets are isocaedron

https://en.wikipedia.org/wiki/Geodesic_grid 

## Technical stack

* Typescript + Parcel
* Babylon.js
* Inferno + Redux
