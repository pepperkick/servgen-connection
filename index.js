const mongoose = require("mongoose");
const mongen = require("@abskmj/mongen");

module.exports = async(app, path, url) => {
    let connection = await mongoose.connect(
        url || app.config.connection, { useNewUrlParser: true });

    mongen.init(connection, path, app);
    
    return connection;
}