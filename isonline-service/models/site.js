module.exports = () => {
    const Mongoose = require('mongoose');

    let site = new Mongoose.Schema({
        _id: {type: String},
        host: {type: String, trim: true, required: true},
        description: {type: String},
        auth: {type: Boolean},
        type: {type: String, required: true}
    })

    site.options.toJSON = {
        transform: function(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    };

    return Mongoose.model('site', site );
}