let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

module.exports = function() {
    let app = express();

    app.use(bodyParser.json());

    consign()
        .include('db.js')
        .then('config/repository.js')
        .then('controllers')
        .then('services')
        .into(app);

    return app;
}
        