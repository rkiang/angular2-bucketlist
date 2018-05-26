const mongoose = require('mongoose');

const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Normal', 'Low']
    }
});

const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema);

module.exports.getAllLists = (callback) => {
    BucketList.find(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    BucketList.remove(query, callback);
}