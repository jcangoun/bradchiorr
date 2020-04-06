const mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({
    fileName: {
        type: 'string',
        required: 'You need to specifie a fileName'
    },
    
});

module.exports = mongoose.model('Media', mediaSchema);
