module.exports = (app) => {
  const data = require('../controllers/dataController');
  const router = require('express').Router();

  router.get('/', data.findAll);

  router.post('/add', data.createData);
  router.post('/:id', data.updateData);
  router.post('/delete/:id', data.deleteData);
  app.use('/data', router);
};
