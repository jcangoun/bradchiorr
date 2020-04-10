const mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({

	name_media: {
		type: 'string',
		required: 'You shoulde specify any name_media'
	},

	type_media: {
		type: 'string',
		required: 'The media Type is required'
	},

	time_media: {

		type: 'time',
		required: 'Please there is needed time for this media'
	},

	created_at: {

		type: 'date',
		required: 'we need the date of beginning for this media'
	},

	date_event: {
		type: 'date',
		required: 'show date for this event'
	},

    fileName: {
        type: 'string',
        required: 'You need to specifie a fileName'
    },


    
});

module.exports = mongoose.model('Media', mediaSchema);
