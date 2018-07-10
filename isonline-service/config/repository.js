const site = require('../models/site');
const monitoring = require('../models/monitoring');

module.exports = {
    siteBD: site().model("site"),
    monitoringBD: monitoring().model("monitoring")
};