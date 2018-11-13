const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kudosSchema = new Schema({
    title: String,
    body: String,
users: [
    {
        type:Schema.Types.ObjectId,
        ref: "users"
    }]
});

const kudos = mongoose.model("kudos", kudosSchema);

module.exports = kudos;