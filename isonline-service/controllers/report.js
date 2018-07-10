var Excel = require('exceljs');

module.exports = app => {

    const MonitoringBD = app.config.repository.monitoringBD;

    app.route("/reports")
        .get((req, res) => {

            let startDate = req.query.startDate
            let finishDate = req.query.finishDate;

            if(startDate === undefined || finishDate === undefined || startDate === '' || finishDate === '') {
                return res.status(500).json({message: "Server Error: " + error});
            }

            start = new Date(startDate);
            finish = new Date(finishDate);

            start.setHours(start.getHours()-3);
            finish.setHours(finish.getHours()-3);

            MonitoringBD.find({date:{"$gte": start, "$lt":finish}}, function(error, result) {

                if(error !== null) {
                    return res.status(500).json({message: "Server Error: " + error});
                }

                let workbook = new Excel.Workbook();
                let worksheet = workbook.addWorksheet('My Sheet');
                
                result.forEach(element => {

                    worksheet.columns = [
                        { header: 'Id', key: 'id', width: 25 },
                        { header: 'Host', key: 'host', width: 32 },
                        { header: 'Description', key: 'description', width: 50 },
                        { header: 'Type', key: 'type', width: 15 },
                        { header: 'Status', key: 'status', width: 10 },
                        { header: 'Date', key: 'date', width: 20 },
                        
                    ];

                    let dt = new Date(element.date);
                    dt.setHours(dt.getHours()-3);
                    worksheet.addRow({id: element.id, host: element.site.host, description: element.site.description, type: element.site.type, status: (element.status?'online':'offline'), date:dt});
                
                });

                let fileName = 'reports.xlsx';
                res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
                return workbook.xlsx.write(res)
                .then(function() {
                    res.end();
                });
                

            })
        })
}