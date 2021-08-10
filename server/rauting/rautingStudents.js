const studentRouter = require('express').Router();
const studentControllers = require('../controlers/studentControlers');
studentRouter.get('/', (req, res) => {
  res.send('Hello Ai');
});
studentRouter.post('/', studentControllers.postStudent);
studentRouter.put('/:id', studentControllers.upDateById);
studentRouter.delete('/:id', studentControllers.deleteById);

module.exports = studentRouter;
