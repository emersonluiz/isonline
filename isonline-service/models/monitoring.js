module.exports = () => {
    const Mongoose = require('mongoose');

    let monitoring = new Mongoose.Schema({
        _id: {type: String},
        site: {
            host: {type: String, trim: true, required: true},
            description: {type: String},
            auth: {type: Boolean},
            type: {type: String, required: true}
        },
        date: {type: Date},
        status: {type: Boolean},
        code: {type: String}
    })

    monitoring.options.toJSON = {
        transform: function(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    };

    return Mongoose.model('monitoring', monitoring);
}