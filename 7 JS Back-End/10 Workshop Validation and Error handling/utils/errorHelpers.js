const { MongooseError, Error } = require("mongoose");

exports.extractErroressages = (err) => {
    if (err instanceof MongooseError) {
        return Object.values(err.errors).map(x => x.message)
    } else {
        return [err.message]
    }

}