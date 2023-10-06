const Cube = require('../models/cube');

const uniqid = require('uniqid');


exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();
    console.log(result);

    // TODO: use mongoose to filter in db

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result
}

exports.find = (cubeId) => Cube.findById(cubeId).lean();

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);
    await cube.save();

    return cube;
}