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

- [Three.js](http://threejs.org/), [React](https://reactjs.org/), and [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/) for 3D rendering in the browser
- [redux](https://redux.js.org/) + [rxjs](https://github.com/ReactiveX/rxjs) = [redux-observable](https://redux-observable.js.org/ for state management
- [marblejs](https://docs.marblejs.com/), [kysely](https://kysely.dev/docs/) and [postgres](https://www.npmjs.com/package/pg) for persistence and api backend
- [nx](https://nx.dev/) and [docker](https://docs.docker.com) to build and run all
