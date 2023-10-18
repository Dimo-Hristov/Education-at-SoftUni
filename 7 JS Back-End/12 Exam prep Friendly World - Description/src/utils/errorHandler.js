const { MongooseError } = require("mongoose")


exports.extractErrorMsgs = (error) => {
    const isInstanceOfMongoose = error instanceof MongooseError;

    if (isInstanceOfMongoose) {
        const errors = Object.values(error.errors)
        const msgs = errors.map(x => x.message);
        return msgs;
    }

    return [error.message]
}