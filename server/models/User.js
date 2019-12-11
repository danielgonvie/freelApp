const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const IMG_URL = /.*\.(gif|jpe?g|bmp|png)$/igm

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 2 },
  picture: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
  name: { type: String, required: true},
  topArtists: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
