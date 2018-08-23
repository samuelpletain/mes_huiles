const mongoose = require('mongoose')
const Oil = mongoose.model('Oils')

exports.list_all_oils = function (req, res) {
  Oil.find({}, function (err, oil) {
    if (err) {
      res.send(err)
    }
    res.json(oil)
  })
}

exports.create_an_oil = function (req, res) {
  const newOil = new Oil(req.body)
  newOil.save(function (err, oil) {
    if (err) {
      res.send(err)
    }
    res.json(oil)
  })
}

exports.read_an_oil = function (req, res) {
  Oil.findOne({name_FR: req.params.oilId}, function (err, oil) {
    if (err) {
      res.send(err)
    }
    res.json(oil)
  })
}

exports.update_an_oil = function (req, res) {
  Oil.findOneAndUpdate({ _id: req.params.oilId }, req.body, { new: true }, function (err, oil) {
    if (err) {
      res.send(err)
    }
    res.json(oil)
  })
}

exports.delete_an_oil = function (req, res) {
  Oil.remove({
    _id: req.params.oilId
  }, function (err) {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Oil successfully deleted' })
  })
}
