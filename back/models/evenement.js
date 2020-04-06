const mongoose = require('mongoose');

let evenementSchema = new mongoose.Schema({
    name_event: {
        type: 'string',
        required: 'You need to specifie a name_event to resolve the problem'
    },

    // ci dessous 1 cle primaire ...............................
    typ_event: [{

        type: mongoose.Schema.Types.ObjectId, 
        ref:'typ_event'
    }],// ci dessous 1 clé primaire finie ..................................

    start_date_event: {
        type: 'date',
        required: 'we need you to add date of beginning'
    },

    end_date_event: {
        type: 'date',
        required: 'we need you to add date of finishing'
    },

    // ci dessous 1 cle primaire .............................
    media_event: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'media_event'
    }] , //clé primaire finie ................................

    link_event: {

        type: 'string',
        required: 'we really need you to put a link for this event'
    },
        
    date_event: {
        type: 'date',  // event takes place at this date 
        required: 
    },


});

module.exports = mongoose.model('Evenement', evenementSchema);