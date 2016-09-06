import Seed from '../models/Seed';
/**
 * Created by jibhaine on 04/09/2016.
 */
export default class SeededBuilder{
    constructor(options){
        this.rng = new Seed(options.string).rng;
    }

}