const mongoose = require('mongoose');

const todoItemsSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model('item', todoItemsSchema);
