const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true
    },
    link: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /(http|https)\:\/\/[\da-z.-]+\.(com|co.il)[\/a-z]*/.test(v);
            },
            message: props => `${props.value} is not a valid link!`
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    createdAt: Date
    
});

module.exports = mongoose.model('card', cardSchema);