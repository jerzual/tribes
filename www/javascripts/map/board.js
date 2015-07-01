/**
 *
 */
define([],function(){
    'use strict';
    var Board = function(x,y,rng){
        this.width = x;
        this.height = y;
        var tiles = new Array(this.width);

        for(var i=0;i<this.width-1;i++){
            tiles[i] = new Array(this.height);
            for(var j=0;j<this.height-1;j++){

                tiles[i][j] = Math.floor(rng.random()*255) ;
            }
        };

        tiles.forEach(function(index,row){row = new Array(this.height);});
        var getTilesAt = function(x,y){
            return tiles[x][y];
        };

        return {getTilesAt : getTilesAt}
    };
    Board.prototype.neighBoursOf = function(x,y){

        return null;
    };
    return Board;
});