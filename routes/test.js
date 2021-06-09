const Test = require('../models/Test');

module.exports = (app) => {
  app.get('/api/test', async (req, res) => {
    const tests = await Test.find();
    res.send(tests);
  });

  app.get('/api/test/:id', async (req, res) => {
    const test = await Test.findById({ _id: req.params.id });
    res.send(test);
  });

  app.post('/api/test', async (req, res) => {
    const test = await Test.create(req.body);
    res.send(test);
  });
};
