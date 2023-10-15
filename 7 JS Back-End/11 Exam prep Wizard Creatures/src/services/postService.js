const Creature = require('../models/Creature');


exports.addCreature = (creatureData) => Creature.create(creatureData);

exports.getAllPosts = () => Creature.find();

exports.getOne = (postId) => Creature.findById(postId);
