let app = require('./config/config')();

let port = process.env.PORT || 3001;


/*module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Accept, Lang, Authorization");
        next();
    });
};*/

if (process.env.NODE_ENV !== "test") {
    app.listen(port, function() {
        console.log(`Node runing on port: ${port}`);
    });
}