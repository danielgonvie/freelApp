const router = require('express').Router();
const Artist = require("../../models/Artist");


 router.get('/', (req, res, next) => {
  Artist.find()
  .then(artists => {
    res.status(200).json(artists)
  })
  .catch(error => {
    res.status(500).json({message: 'Something went wrong'})
  })
}) 


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Artist.findById(id)
  .populate("calendar")
  .then(artist => {
    res.status(200).json(artist)
  })
  // .catch(error => res.status(500).json({ message: 'Artist not found'}))
  .catch(error => console.log(error))
  // .populate("calendar")
  // .populate("portfolio")
  // .then(artist => {
  //   res.status(200).json(artist)
  // })
  // // .catch(error => res.status(500).json({ message: 'Artist not found'}))
  // .catch(error => console.log(error))
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  Artist.findByIdAndUpdate(id, req.body)
  .then(() => {
    res.status(200).json({ message: `Artist ${id} updated` })
  })
  .catch(error => {
    res.status(500).json({ message:'Something went wrong' })
  })
})


module.exports = router;