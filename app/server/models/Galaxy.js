'use strict';

import mongoose,{Schema} from 'mongoose';

var messageSchema = Schema({
    id: String,
    seed: String,
    text: String,
    user: Object,
    time: String
});

export default mongoose.model('Galaxy', messageSchema);