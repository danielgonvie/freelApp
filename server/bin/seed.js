require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Calendar = require("../models/Calendar");
const Portfolio = require("../models/Portfolio");
const Artist = require("../models/Artist");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let artists = [
  {
    email: "photo@gmail.com",
    password: bcrypt.hashSync("photo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Laura Vivas",
    alias: "xPalomitax",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Fotógrafa fija",
    availability: "city",
    contactEmail: "photopublic@gmail.com",
    contactPhone: "666555444",
    social: {
      instagram: "@palomita_sexy",
      other: "www.palomasexy.com"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "model@gmail.com",
    password: bcrypt.hashSync("model", bcrypt.genSaltSync(bcryptSalt)),
    name: "Lorena Poza",
    alias: "Lorena TA",
    toggleAlias: "alias",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Modelo profesional de alto standing",
    availability: "worldwide",
    contactEmail: "modelpublic@gmail.com",
    contactPhone: "666777888",
    social: {
      instagram: "@la_lore",
      other: "www.xqyolovalgo.com"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "video@gmail.com",
    password: bcrypt.hashSync("video", bcrypt.genSaltSync(bcryptSalt)),
    name: "Dani Vicario",
    alias: "No",
    toggleAlias: "name",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "photo",
    subcategory: "Videógrafo",
    availability: "100",
    contactEmail: "videopublic@gmail.com",
    contactPhone: "666999000",
    social: {
      instagram: "@d.vicario",
      other: "www.dvicario.es"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "tattoo@gmail.com",
    password: bcrypt.hashSync("tattoo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Sito Crack",
    alias: "TatuSito",
    toggleAlias: "alias",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "tattoo",
    subcategory: "Tatuajes realistas",
    availability: "local",
    contactEmail: "tattoopublic@gmail.com",
    contactPhone: "654789321",
    social: {
      instagram: "@sitocrack",
      other: "www.tatusito.es"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "musicdj@gmail.com",
    password: bcrypt.hashSync("musicdj", bcrypt.genSaltSync(bcryptSalt)),
    name: "Carlos Trujillo",
    alias: "Dos Attack",
    toggleAlias: "both",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "music",
    subcategory: "DJ techno",
    availability: "worldwide",
    contactEmail: "musicdjpublic@gmail.com",
    contactPhone: "693852147",
    social: {
      instagram: "@dosAttack",
      soundcloud: "Dos Attack",
      other: "www.charlyattack.es"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "guitarist@gmail.com",
    password: bcrypt.hashSync("gutarist", bcrypt.genSaltSync(bcryptSalt)),
    name: "Manué Álvarez",
    alias: "Er Sevillano",
    toggleAlias: "both",
    location: {
      city: "Sevilla",
      country: "España"
    },
    category: "music",
    subcategory: "Guitarra española",
    availability: "city",
    contactEmail: "guitaristpublic@gmail.com",
    contactPhone: "675984123",
    social: {
      instagram: "@manue_sevilla",
      soundcloud: "Er Sevillano",
      other: "www.ersevillano.es"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "designweb@gmail.com",
    password: bcrypt.hashSync("designweb", bcrypt.genSaltSync(bcryptSalt)),
    name: "Fran Naranjo",
    alias: "No",
    toggleAlias: "name",
    location: {
      city: "Canarias",
      country: "España"
    },
    category: "design",
    subcategory: "Fullstack web designer",
    availability: "worldwide",
    contactEmail: "designwebpublic@gmail.com",
    contactPhone: "682953157",
    social: {
      github: "@fran_pomelo",
      other: "www.franchesco.es"
    },
    calendar: undefined,
    portfolio: undefined
  },
  {
    email: "designlogo@gmail.com",
    password: bcrypt.hashSync("designlogo", bcrypt.genSaltSync(bcryptSalt)),
    name: "Hector Arrieta",
    alias: "Grxxts",
    toggleAlias: "both",
    location: {
      city: "Madrid",
      country: "España"
    },
    category: "design",
    subcategory: "Logos para marcas",
    availability: "worldwide",
    contactEmail: "designlogopublic@gmail.com",
    contactPhone: "679458213",
    social: {
      instagram: "@grxxts_",
      other: "www.brand-logo-machine.es"
    },
    calendar: undefined,
    portfolio: undefined
  }
];

let portfolios = [
  {
    description:
      "Me gusta capturar el momento sacandole fotos a la vida de manera sensual y fantástica.",
    gallery: {
      imageDesc:
        "Me atrevería a decir que estás son las fotos que mejor me representan",
      images: [
        "https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg",
        "https://i.ytimg.com/vi/lhOlOFxpeSs/maxresdefault.jpg",
        "https://k62.kn3.net/taringa/4/2/A/A/E/4/AgustinQ10/997.jpg"
      ],
      videoDesc: "Respecto a vídeo trabajo sobretodo para youtubers como willy",
      videos: [
        "https://www.youtube.com/embed/5RQ354YCHOg",
        "https://www.youtube.com/embed/5RQ354YCHOg"
      ]
    }
  },
  {
    description:
      "Me gusta posar de manera sensual y fantástica. Vivo de mi cara. Si me vas a pegar, mejor pégate a mi y así aprendes a ser divina ;)",
    gallery: {
      imageDesc:
        "Me atrevería a decir que estás son las fotos que mejor me representan",
      images: [
        "https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg",
        "https://i.ytimg.com/vi/lhOlOFxpeSs/maxresdefault.jpg",
        "https://k62.kn3.net/taringa/4/2/A/A/E/4/AgustinQ10/997.jpg"
      ]
    }
  },
  {
    description: "Grabo todo como si fuese un jodido stalker",
    gallery: {
      videoDesc: 'Mis "trabajos"',
      videos: [
        "https://www.youtube.com/embed/fzzjgBAaWZw",
        "https://www.youtube.com/embed/fzzjgBAaWZw"
      ]
    }
  },
  {
    description:
      "Me gusta tatuar por que a la gente le duele y me encanta ver a la gente sufrir :3",
    gallery: {
      imageDesc: "Mis mejores trabajos",
      images: [
        "https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png",
        "https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png",
        "https://s29588.pcdn.co/wp-content/uploads/sites/2/2017/06/Tattoo-Fail.png"
      ]
    }
  },
  {
    description: "Que te voy a contar que no sepas 🕶 ",
    gallery: {
      imageDesc: "Xo perreando en la disco",
      images: [
        "https://www.esneca.com/wp-content/uploads/DJ-PROFESIONAL.jpg",
        "http://djmagla.com/wp-content/uploads/2019/03/Turn-Up-Charlie-664x400.jpg",
        "https://m.eldiario.es/cultura/dj-espanola-Fatima-Hajji-Facebook_EDIIMA20160407_0356_19.jpg"
      ],
      songDesc: "Mis temasos loketeeeeee",
      songs: [
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ]
    }
  },
  {
    description:
      "Illo un papa yón, una pissa con pexuguita. Me encuentro dinero en los bolsos de las señoras, soy muy afortunado.",
    gallery: {
      songs: [
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641439264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ]
    }
  },
  {
    description:
      "Profesional polivalente cualificado y enfocado en el diseño web. Amigo de mis amigos y vecino de mis vecinos.  Visita mi web para ver las páginas que he creado.",
    gallery: {
      imageDesc: "Un par de proyectos",
      images: [
        "https://cdn.dribbble.com/users/674925/screenshots/8975146/media/1d006555088b5f1d5d02f6e07d35aa2d.png",
        "https://cdn.dribbble.com/users/1732969/screenshots/8999363/media/e9287ea25ec24bd652702a901926e9b5.png",
        "https://cdn.dribbble.com/users/501822/screenshots/8973432/media/d63378d18ab3246c1309b5ae077fada7.mp4"
      ]
    }
  },
  {
    description:
      "Mi madre me dijo que no iba a llegar a nada en la vida, así que hice artes y se lo confirmé",
    gallery: {
      imageDesc: "Sé usar un lápiz, mira mis sketches",
      images: [
        "https://www.sensationcreative.com/wp-content/uploads/2017/12/Logo-examples-3.jpg",
        "https://i.pinimg.com/originals/3f/4c/1f/3f4c1ff3edeb347969a3b9eebe92b554.jpg",
        "https://secureservercdn.net/104.238.71.97/y51.c67.myftpupload.com/wp-content/uploads/2019/06/taste-of-bim-vector-logo.jpg"
      ]
    }
  }
];

let calendars = [
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  },
  {
    resources: [{ id: "r1", name: "Jobs" }],
    events: [
      {
        id: 1,
        start: "2019-12-13 14:00:00",
        end: "2019-12-14 18:00:00",
        title: "Pasear al perro",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "red",
        resourceId: "r1"
      },
      {
        id: 2,
        start: "2019-12-12 14:00:00",
        end: "2019-12-13 18:00:00",
        title: "Pasear al niño",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "green",
        resourceId: "r1"
      },
      {
        id: 3,
        start: "2019-12-15 14:00:00",
        end: "2019-12-16 18:00:00",
        title: "Pasear al viejo",
        description: "Llevar a toby al veterinario y jugar a la pelota con él",
        bgColor: "blue",
        resourceId: "r1"
      }
    ]
  }
];

let users = [
  {
    email: "patata@gmail.com",
    password: bcrypt.hashSync("patata", bcrypt.genSaltSync(bcryptSalt)),
    name: "Patata Fernández"
  },
  {
    email: "naranja@gmail.com",
    password: bcrypt.hashSync("naranja", bcrypt.genSaltSync(bcryptSalt)),
    name: "Naranja González"
  },
  {
    email: "daniel@gmail.com",
    password: bcrypt.hashSync("daniel", bcrypt.genSaltSync(bcryptSalt)),
    name: "Daniel González"
  }
];

let createdCalendars = [],
  createdPortfolios = [];

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    return Calendar.deleteMany().then(() => {
      return Calendar.create(calendars);
    });
  })
  .then(calendars => {
    createdCalendars = calendars;
    return Portfolio.deleteMany().then(() => {
      return Portfolio.create(portfolios);
    });
  })
  .then(portfolios => {
    createdPortfolios = portfolios;
    // console.log(createdCalendars);
    // console.log("*".repeat(200));
    // console.log(createdPortfolios);

    artists = artists.map((artist, idx) => {
      artist.portfolio = createdPortfolios[idx]._id;
      artist.calendar = createdCalendars[idx]._id;

      return artist;
    });

    Artist.deleteMany()
      .then(() => {
        return Artist.create(artists);
      })
      .then(artistsCreated => {
        console.log(
          `${artistsCreated.length} artists created with the following id:`
        );
        console.log(artistsCreated.map(u => u._id));
      })
      .then(() => {
        // Close properly the connection to Mongoose
        mongoose.disconnect();
      });
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
