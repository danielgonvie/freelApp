const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const IMG_URL = /.*\.(gif|jpe?g|bmp|png)$/igm

const artistSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 2 },
  picture: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
  name: { type: String, required: true},
  alias: { type: String},
  toggleAlias: {type: String, enum: ["name", "alias", "both"], default: "alias"},
  topArtists: [{type: Schema.Types.ObjectId,ref: "Artist"}],
  fans: [{type: Schema.Types.ObjectId,ref:"User"},{type: Schema.Types.ObjectId,ref:"Artist"}],
  location:{
    city: { type: String, required: true},
    country: { type: String, required: true},
  },
  category: {type: String, enum: ["photo", "tattoo", "design", "music"]},
  subcategory: {type: String},
  portfolio: [{type: Schema.Types.ObjectId,ref: "Portfolio"}],
  calendar: [{type: Schema.Types.ObjectId,ref: "Calendar"}],
  contactEmail: { type: String},
  contactPhone: { type: String},
  social:{
    instagram: { type: String},
    github: { type: String},
    soundcloud: { type: String},
    other: { type: String},
  },
  bannerImg: { type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
