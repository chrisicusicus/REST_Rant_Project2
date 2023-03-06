const router = require('express').Router()
const places = require('../models/places')  

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = router
