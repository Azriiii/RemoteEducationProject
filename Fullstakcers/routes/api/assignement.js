const express = require('express');
const assignement = require('../../models/Assignement');
const router = express.Router();

// Load Book model
const Asgn = require('../../models/Assignement');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('asgn route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Asgn.find()
    .then(assignement => res.json(assignement))
    .catch(err => res.status(404).json({ noassignementsfound: 'No Assignements found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Asgn.findById(req.params.id)
    .then(assignement => res.json(assignement))
    .catch(err => res.status(404).json({ noassignementsfound: 'No assignement found' }));
});


router.post('/', async (req, res, next) => {
 
  let date = new Date()
  const cou = new Asgn({
      
     
      // published_date: date,
     // date: req.body.date,
     As_name: req.body.As_name,
     As_desc: req.body.As_desc,
     As_type: req.body.As_type,
     As_user: req.body.As_user,



  });




  cou.save().then(result => {
      console.log(result);
      res.status(201).json({
          message: "assignements Created",
          cou: result,


      });
  }).catch(error => console.log(error));



});



// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Asgn.findByIdAndUpdate(req.params.id, req.body)
    .then(Asgn => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Asgn.findByIdAndRemove(req.params.id, req.body)
    .then(Asgn => res.json({ mgs: 'assignement entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such assignement' }));
});

module.exports = router;
