const router = require('express').Router()
const places = require('../models/places')  

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = router
