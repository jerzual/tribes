'use strict';

import mongoose,{Schema} from 'mongoose';

var messageSchema = Schema({
    id: String,
    channelID: String,
    text: String,
    user: Object,
    time: String
});

export default mongoose.model('Message', messageSchema);