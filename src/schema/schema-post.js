const Schema = require("validate");
const _ = require("lodash");

const post = new Schema({
  RangeId: {
    type: String,
    required: true
  },
  IndexSample: {
    type: String,
    required: true
  }
});

exports.validate = obj => {

  var arrErros = post.validate(obj);
  return arrErros;
};