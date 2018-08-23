const mongoose = require('mongoose')
const Schema = mongoose.Schema

var OilSchema = new Schema({
  name_FR: {
    type: String,
    required: 'Please enter the french name of the oil'
  },
  name_EN: {
    type: String,
    required: 'Please enter the english name of the oil'
  },
  name_LAT: {
    type: String,
    required: 'Please enter the latin name of the oil'
  },
  img: {
    type: String,
    required: 'Please provide a link to the oil image',
    default: 'https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'
  },
  description: {
    type: String
  },
  properties: {
    type: [String]
  }
})

module.exports = mongoose.model('Oils', OilSchema)
