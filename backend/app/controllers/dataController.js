const DataModel = require('../models/todo.js');

exports.findAll = async (req, res) => {
  // console.log(req);
  try {
    const items = await DataModel.find();
    res.json(items);
  } catch (err) {
    res.send(err.nessage);
  }
};

exports.createData = async (req, res) => {
  console.log(req.body);
  // res.send({ data: 'Created a data successfully' });
  const item = new DataModel({
    item: req.body.item,
  });
  try {
    const a1 = await item.save();
    res.json(a1);
  } catch (err) {
    res.send('Error');
  }
};

exports.updateData = async (req, res) => {
  try {
    console.log(req.params.id);
    const item = await DataModel.findById(req.params.id);
    item.completed = !item.completed;
    const a1 = await item.save();
    res.json(a1);
  } catch (err) {
    res.send(err.message);
  }
};

exports.deleteData = async (req, res) => {
  try {
    const deletedItem = await DataModel.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully', deletedItem });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting item', error: err.message });
  }
};
