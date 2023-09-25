const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => cubes.slice();

exports.find = (cubeId) => cubes.find(cube => cube.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    }

    cubes.push(newCube);

    return newCube
}