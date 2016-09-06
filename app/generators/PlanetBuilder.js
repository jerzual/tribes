import SeededBuilder from './SeededBuilder';

export const MIN_SIZE = 20;
export const AVAILABLE_SIZE_FACTORS = [1,4,9,20];

/**
 * Created by jibhaine on 04/09/2016.
 */
export default class PlanetBuilder extends SeededBuilder{
    constructor(options){
        super(options);
        this.planet = new Planet();
    }
    setRandomSize(){

    }
    fillWithChunks(){

    }
    build(){

    }
}