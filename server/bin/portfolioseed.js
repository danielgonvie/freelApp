const mongoose = require("mongoose");
const Portfolio = require("../models/Portfolio");



mongoose
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let portfolios = [
  {
   description: "Me gusta capturar el momento sacandole fotos a la vida de manera sensual y fantástica.",
   gallery:{
     imageDesc:"Me atrevería a decir que estás son las fotos que mejor me representan",
     images:["https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg","https://i.ytimg.com/vi/lhOlOFxpeSs/maxresdefault.jpg", "https://k62.kn3.net/taringa/4/2/A/A/E/4/AgustinQ10/997.jpg"],
     videoDesc: "Respecto a vídeo trabajo sobretodo para youtubers como willy",
     videos: ["https://www.youtube.com/embed/5RQ354YCHOg", "https://www.youtube.com/embed/5RQ354YCHOg"],
   }
  },
  {
    description: "Me gusta posar de manera sensual y fantástica. Vivo de mi cara. Si me vas a pegar, mejor pégate a mi y así aprendes a ser divina ;)",
    gallery:{
      imageDesc:"Me atrevería a decir que estás son las fotos que mejor me representan",
      images:["https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg","https://i.ytimg.com/vi/lhOlOFxpeSs/maxresdefault.jpg", "https://k62.kn3.net/taringa/4/2/A/A/E/4/AgustinQ10/997.jpg"],
    }
   },
   {
    description: "Grabo todo como si fuese un jodido stalker",
    gallery:{
      videoDesc: 'Mis "trabajos"',
      videos: ["https://www.youtube.com/embed/fzzjgBAaWZw", "https://www.youtube.com/embed/fzzjgBAaWZw"],
    }
   },
   {
    description: "Me gusta tatuar por que a la gente le duele y me encanta ver a la gente sufrir :3",
    gallery:{
      imageDesc:"Mis mejores trabajos",
      images:["https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png","https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png", "https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png"],
    }
   },
   {
    description: "Que te voy a contar que no sepas 🕶 ", 
    gallery:{
      imageDesc:"Xo perreando en la disco",
      images:["https://www.esneca.com/wp-content/uploads/DJ-PROFESIONAL.jpg","http://djmagla.com/wp-content/uploads/2019/03/Turn-Up-Charlie-664x400.jpg", "https://m.eldiario.es/cultura/dj-espanola-Fatima-Hajji-Facebook_EDIIMA20160407_0356_19.jpg"],
      songDesc: "Mis temasos loketeeeeee",
      songs:["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"]
    }
   },
   {
    description: "Illo un papa yón, una pissa con pexuguita. Me encuentro dinero en los bolsos de las señoras, soy muy afortunado.", 
    gallery:{
      songs:["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"]
    }
   },
   {
    description: "Profesional polivalente cualificado y enfocado en el diseño web. Amigo de mis amigos y vecino de mis vecinos.  Visita mi web para ver las páginas que he creado.", 
    gallery:{
      imageDesc:"Un par de proyectos",
     images:["https://cdn.dribbble.com/users/674925/screenshots/8975146/media/1d006555088b5f1d5d02f6e07d35aa2d.png","https://cdn.dribbble.com/users/1732969/screenshots/8999363/media/e9287ea25ec24bd652702a901926e9b5.png", "https://cdn.dribbble.com/users/501822/screenshots/8973432/media/d63378d18ab3246c1309b5ae077fada7.mp4"],
    }
   },
   {
    description: "Mi madre me dijo que no iba a llegar a nada en la vida, así que hice artes y se lo confirmé", 
    gallery:{
      imageDesc:"Sé usar un lápiz, mira mis sketches",
     images:["https://www.sensationcreative.com/wp-content/uploads/2017/12/Logo-examples-3.jpg","https://i.pinimg.com/originals/3f/4c/1f/3f4c1ff3edeb347969a3b9eebe92b554.jpg", "https://secureservercdn.net/104.238.71.97/y51.c67.myftpupload.com/wp-content/uploads/2019/06/taste-of-bim-vector-logo.jpg"],
    }
   },

 
]

Portfolio.deleteMany()
.then(() => {
  return Portfolio.create(portfolios)
})
.then(portfoliosCreated => {
  console.log(`${portfoliosCreated.length} portfolios created with the following id:`);
  console.log(portfoliosCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})