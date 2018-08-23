module.exports = function (app) {
  var oils = require('../controllers/oilController')

  // todoList Routes
  app.route('/huiles')
    .get(oils.list_all_oils)
    .post(oils.create_an_oil)

  app.route('/huiles/:oilId')
    .get(oils.read_an_oil)
    .put(oils.update_an_oil)
    .delete(oils.delete_an_oil)
}
