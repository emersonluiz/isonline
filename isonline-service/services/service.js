process.env.NTBA_FIX_319 = 1;

var schedule = require('node-schedule');

const request = require('request');

const TelegramBot = require('node-telegram-bot-api');

run = function(app) {
    const SiteBD = app.config.repository.siteBD;
    const MonitoringBD = app.config.repository.monitoringBD;
    const uuidV4 = require('uuid/v4');
    const token = '';
    const chatId = '';
    const bot = new TelegramBot(token);

    SiteBD.find({}, function(err, result) {
        if (err) throw err;

        let code = uuidV4();

        result.forEach(element => {
            let options;
            if(element.auth) {
                options = {
                    url: element,
                    headers: {
                        'Authorization': 'Bearer '
                    }
                };
            } else {
                options = {
                    url: element.host
                };
            }

            request(options, function (error, response, body) {
                if (error || response.statusCode !== 200) {
                    console.log(element, "Verificado e está com erro!!! " + new Date());
                    let dt = new Date();
                    //dt.setHours(dt.getHours()-3);
                    let mn = {site: element, date: dt, status: false};
                    mn._id = uuidV4();
                    mn.code = code;

                    MonitoringBD.create(mn, function(error, success) {
                        console.log("saved with success");
                    })
                   /// bot.sendMessage(chatId, element.host + ', está com problemas!!!');
                } else {
                    let dt = new Date();
                    //dt.setHours(dt.getHours()-3);
                    let mn = {site: element, date: dt, status: true};
                    mn._id = uuidV4();
                    mn.code = code;

                    MonitoringBD.create(mn, function(error, success) {
                        console.log("saved with success");
                    })
                    console.log(element, "Verificado e está ok!!! " + new Date());
                }
            })
        })
    })
}

module.exports = app => {

    let sd = schedule.scheduleJob('0 */2 * * * *', function(fireDate) {
        console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
        run(app);
    });


    return {run: run}

}
