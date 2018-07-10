module.exports = app => {

    const BD = app.config.repository.siteBD;
    const uuidV4 = require('uuid/v4');

    app.route("/sites")

        .post((req, res) => {

            if (req.body.host === undefined || req.body.host === null || req.body.host === "") {
                return res.status(400).json({message: "Host is required"});
            }

            var sites = req.body;
            sites._id = uuidV4();

            BD.create(sites, (error, site) => {
                if (error) return res.status(500).json({message: error.message});

                console.log(app)

                app.services.service.run(app);

                return res.status(201).json(site);
            });

        })

        .get((req, res) => {
            BD.find({}, function(error, result) {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                return res.status(200).json(result);

            })
        })

    app.route("/sites/:id")

        .delete((req, res) => {
            BD.remove({_id: req.params.id}, (error, site) => {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                return res.sendStatus(204);
            });
        })
}
