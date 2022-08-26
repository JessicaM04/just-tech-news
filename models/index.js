const User = require("./User");
const Post = require("./Post");

// create associateions
User.hasMany(Post, {
  foreighKey: "user_id"
});

Post.belongsTo(User, {
  foreignKey: "user_id"
});


module.exports = { User, Post };