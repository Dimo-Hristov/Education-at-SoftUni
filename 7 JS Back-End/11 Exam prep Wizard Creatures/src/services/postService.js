const Creature = require('../models/Creature');


exports.addCreature = (creatureData) => Creature.create(creatureData);

exports.getAllPosts = () => Creature.find();

exports.getOne = (postId) => Creature.findById(postId);

exports.vote = (postId, userId) => Creature.findByIdAndUpdate(
    postId,
    { $push: { 'votes': { user: userId } } },
);

exports.deleteCreature = (postId) => Creature.findByIdAndDelete(postId);

exports.updateCreature = (creatureId, updatedData) => Creature.findByIdAndUpdate(creatureId, updatedData, { runValidators: true });

exports.findMyPosts = (userId) => Creature.find({ owner: userId }).exec();

