import mongoose,{Schema} from 'mongoose';
import Vector3 from 'three';

var playerSchema = Schema({
    id: String,
    seed: String,
    detail: String,
    position: Vector3,
    time: String
});

export default mongoose.model('Players', playerSchema);