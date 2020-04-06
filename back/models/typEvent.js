const mongoose = require('mongoose');

let typ_eventSchema = new mongoose.Schema({
    name_typ: {
        type: 'string',
        required: 'You need to specifie a name to resolve the problem'
    },
    

    // exemple de la cle etrangere mais d un autre travail
    /*list: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'list'
    }]*/
});

module.exports = mongoose.model('Typ_event', typ_eventSchema);