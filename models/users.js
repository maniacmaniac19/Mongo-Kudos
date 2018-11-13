const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "first_name is Required"
      }
});

const users = mongoose.model("users", usersSchema);

module.exports = users;