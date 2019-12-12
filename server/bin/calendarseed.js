const mongoose = require("mongoose");
const Calendar = require("../models/Calendar");



mongoose
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let calendars = [
  {
   resources: [{id:"r1", name: "Jobs"}],
   events:[{
     id: 1,
     start: "2019-12-13 14:00:00",
     end: "2019-12-14 18:00:00",
     title: "Pasear al perro",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "red",
     resourceId:"r1",
   },
   {
    id: 2,
    start: "2019-12-12 14:00:00",
    end: "2019-12-13 18:00:00",
    title: "Pasear al niño",
    description: "Llevar a toby al veterinario y jugar a la pelota con él",
    bgColor: "green",
    resourceId:"r1",
  },
  {
    id: 3,
    start: "2019-12-15 14:00:00",
    end: "2019-12-16 18:00:00",
    title: "Pasear al viejo",
    description: "Llevar a toby al veterinario y jugar a la pelota con él",
    bgColor: "blue",
    resourceId:"r1",
  }]
  },
  {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
   {
    resources: [{id:"r1", name: "Jobs"}],
    events:[{
      id: 1,
      start: "2019-12-13 14:00:00",
      end: "2019-12-14 18:00:00",
      title: "Pasear al perro",
      description: "Llevar a toby al veterinario y jugar a la pelota con él",
      bgColor: "red",
      resourceId:"r1",
    },
    {
     id: 2,
     start: "2019-12-12 14:00:00",
     end: "2019-12-13 18:00:00",
     title: "Pasear al niño",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "green",
     resourceId:"r1",
   },
   {
     id: 3,
     start: "2019-12-15 14:00:00",
     end: "2019-12-16 18:00:00",
     title: "Pasear al viejo",
     description: "Llevar a toby al veterinario y jugar a la pelota con él",
     bgColor: "blue",
     resourceId:"r1",
   }]
   },
 
]

Calendar.deleteMany()
.then(() => {
  return Calendar.create(calendars)
})
.then(calendarsCreated => {
  console.log(`${calendarsCreated.length} calendars created with the following id:`);
  console.log(calendarsCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})