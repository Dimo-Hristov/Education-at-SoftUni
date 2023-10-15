const Creature = require('../models/Creature');


exports.addCreature = (creatureData) => Creature.create(creatureData);

exports.getAllPosts = () => Creature.find();

exports.getOne = (postId) => Creature.findById(postId);

exports.vote = (postId, userId) => Creature.findByIdAndUpdate(
    postId,
    { $push: { 'votes': { user: userId } } },
    { new: true }
)

exports.getVotedUsers = (votedUsersId) => Creature.find({ _id: { $in: votedUsersId } });
