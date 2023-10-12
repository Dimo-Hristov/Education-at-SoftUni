exports.validateName = (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(404).send('Invalid name')
    };
};