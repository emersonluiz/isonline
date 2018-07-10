module.exports = app => {

    const MonitoringBD = app.config.repository.monitoringBD;
    const uuidV4 = require('uuid/v4');

    app.route("/checks")
        .get((req, res) => {
            MonitoringBD.find({}, function(error, result) {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                if(result.length == 0) {
                    return res.status(200).json(result);
                }

                MonitoringBD.find({code: result[0].code}, function(er, r) {
                    if(er !== null) {
                        return res.status(500).json({message: "Server Error: " + error});
                    }

                    return res.status(200).json(r);
                })

            }).sort({date:-1}).limit(1);
        })

    app.route("/checks/last/month")

        .get((req, res) => {

            let d = new Date();
            let endDate = new Date(d.getFullYear(), d.getMonth() + 1, 0, 20, 59, 59);


            let initDate = new Date(d.getFullYear(), d.getMonth(), 1, -3, 0, 0)

            console.log(initDate, endDate)

            MonitoringBD.find({date:{"$gte": initDate, "$lt":endDate}}, (error, monitoring) => {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                return res.status(200).json(monitoring);
            });
        })

    app.route("/checks/:id")

        .get((req, res) => {
            MonitoringBD.findOne({_id: req.params.id}, (error, monitoring) => {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                return res.status(200).json(monitoring);
            });
        })
}