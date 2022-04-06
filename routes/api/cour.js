const express = require('express');
const router = express.Router();

// Load Book model
const Cour = require('../../models/Cour');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('cour route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Cour.find()
    .then(cours => res.json(cours))
    .catch(err => res.status(404).json({ nocoursfound: 'No Cours found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Cour.findById(req.params.id)
    .then(cour => res.json(cour))
    .catch(err => res.status(404).json({ nocoursfound: 'No Cour found' }));
});


router.post('/', async (req, res, next) => {
 
  let date = new Date()
  const cou = new Cour({
      
     
      published_date: date,
      modalite: req.body.modalite,
     titre: req.body.titre,
     desc: req.body.desc,

nbrParticipants: req.body.nbrParticipants,


  });




  cou.save().then(result => {
      console.log(result);
      res.status(201).json({
          message: "Cours Created",
          cou: result,


      });
  }).catch(error => console.log(error));



});



// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Cour.findByIdAndUpdate(req.params.id, req.body)
    .then(cour => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Cour.findByIdAndRemove(req.params.id, req.body)
    .then(cour => res.json({ mgs: 'Cour entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a cour' }));
});

module.exports = router;
