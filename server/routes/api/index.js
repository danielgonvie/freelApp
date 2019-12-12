const router = require('express').Router();

router.use('/auth', require('./auth.routes'))
router.use('/artist', require('./artist.routes'))


module.exports = router;