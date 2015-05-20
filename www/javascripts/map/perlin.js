/**
 * This factory generates a @{Board} with a Perlin Noise algorithm.
 */
define([],function(Board, Hexa){
    var PerlinBoardGenerator = function(width, height, maxDepth){
        this.boardWidth = width;
        this.boardHeight = height;
        this.boardDepth = maxDepth;

    }
    return PerlinBoardGenerator;
})