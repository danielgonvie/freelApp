require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Artist = require("../models/Artist");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let artists = [
  {
    email: "photo@gmail.com",
    password: bcrypt.hashSync("photo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Laura Vivas",
    alias: "xPalomitax",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Fotógrafa fija",
    availability: "city",
    contactEmail: "photopublic@gmail.com",
    contactPhone: "666555444",
    social:{
      instagram: "@palomita_sexy",
      other: "www.palomasexy.com"
    },
    calendar: "5df2547b3bd3b366e822008f",
    portfolio:"5df2548c20b1466718c27d26"
  },
  {
    email: "model@gmail.com",
    password: bcrypt.hashSync("model", bcrypt.genSaltSync(bcryptSalt)),
    name: "Lorena Poza",
    alias: "Lorena TA",
    toggleAlias: "alias",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Modelo profesional de alto standing",
    availability: "worldwide",
    contactEmail: "modelpublic@gmail.com",
    contactPhone: "666777888",
    social:{
      instagram: "@la_lore",
      other: "www.xqyolovalgo.com"
    },
    calendar: "5df2547b3bd3b366e8220094",
    portfolio:"5df2548c20b1466718c27d27"
  },
  {
    email: "video@gmail.com",
    password: bcrypt.hashSync("video", bcrypt.genSaltSync(bcryptSalt)),
    name: "Dani Vicario",
    alias: "No",
    toggleAlias: "name",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Videógrafo",
    availability: "100",
    contactEmail: "videopublic@gmail.com",
    contactPhone: "666999000",
    social:{
      instagram: "@d.vicario",
      other: "www.dvicario.es"
    },
    calendar: "5df2547b3bd3b366e8220099",
    portfolio:"5df2548c20b1466718c27d28"
  },
  {
    email: "tattoo@gmail.com",
    password: bcrypt.hashSync("tattoo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Sito Crack",
    alias: "TatuSito",
    toggleAlias: "alias",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "tattoo",
    subcategory: "Tatuajes realistas",
    availability: "local",
    contactEmail: "tattoopublic@gmail.com",
    contactPhone: "654789321",
    social:{
      instagram: "@sitocrack",
      other: "www.tatusito.es"
    },
    calendar: "5df2547b3bd3b366e822009e",
    portfolio:"5df2548c20b1466718c27d29"
  },
  {
    email: "musicdj@gmail.com",
    password: bcrypt.hashSync("musicdj", bcrypt.genSaltSync(bcryptSalt)),
    name: "Carlos Trujillo",
    alias: "Dos Attack",
    toggleAlias: "both",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "music",
    subcategory: "DJ techno",
    availability: "worldwide",
    contactEmail: "musicdjpublic@gmail.com",
    contactPhone: "693852147",
    social:{
      instagram: "@dosAttack",
      soundcloud: "Dos Attack",
      other: "www.charlyattack.es"
    },
    calendar: "5df2547b3bd3b366e82200a3",
    portfolio:"5df2548c20b1466718c27d2a"
  },
  {
    email: "guitarist@gmail.com",
    password: bcrypt.hashSync("gutarist", bcrypt.genSaltSync(bcryptSalt)),
    name: "Manué Álvarez",
    alias: "Er Sevillano",
    toggleAlias: "both",
    location:{
      city: "Sevilla",
      country: "España"
    },
    category: "music",
    subcategory: "Guitarra española",
    availability: "city",
    contactEmail: "guitaristpublic@gmail.com",
    contactPhone: "675984123",
    social:{
      instagram: "@manue_sevilla",
      soundcloud: "Er Sevillano",
      other: "www.ersevillano.es"
    },
    calendar: "5df2547b3bd3b366e82200a8",
    portfolio:"5df2548c20b1466718c27d2b"
  },
  {
    email: "designweb@gmail.com",
    password: bcrypt.hashSync("designweb", bcrypt.genSaltSync(bcryptSalt)),
    name: "Fran Naranjo",
    alias: "No",
    toggleAlias: "name",
    location:{
      city: "Canarias",
      country: "España"
    },
    category: "design",
    subcategory: "Fullstack web designer",
    availability: "worldwide",
    contactEmail: "designwebpublic@gmail.com",
    contactPhone: "682953157",
    social:{
      github: "@fran_pomelo",
      other: "www.franchesco.es"
    },
    calendar: "5df2547b3bd3b366e82200ad",
    portfolio:"5df2548c20b1466718c27d2c"
  },
  {
    email: "designlogo@gmail.com",
    password: bcrypt.hashSync("designlogo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Hector Arrieta",
    alias: "Grxxts",
    toggleAlias: "both",
    location:{
      city: "Madrid",
      country: "España"
    },
    category: "design",
    subcategory: "Logos para marcas",
    availability: "worldwide",
    contactEmail: "designlogopublic@gmail.com",
    contactPhone: "679458213",
    social:{
      instagram: "@grxxts_",
      other: "www.brand-logo-machine.es"
    },
    calendar: "5df2547b3bd3b366e82200b2",
    portfolio:"5df2548c20b1466718c27d2d"
  },
]

Artist.deleteMany()
.then(() => {
  return Artist.create(artists)
})
.then(artistsCreated => {
  console.log(`${artistsCreated.length} artists created with the following id:`);
  console.log(artistsCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})