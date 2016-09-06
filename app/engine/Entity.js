import Behavior from './Behavior';

class Entity{
    behaviors = [];
    constructor(){

    }
    update(){

    }
    addBehavior(options){
        this.push(new Behavior(options));
    }
}

export default Entity;