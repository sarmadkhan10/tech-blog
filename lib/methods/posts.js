import '../collections/schemas/posts.js'

Meteor.methods({
  submitPost: function(post) {

    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    var additionalParams = {
      author: 'Author',
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(post, additionalParams);
    post._id = Posts.insert(post);

    return post;
  },

  updatePost: function(modifier, documendId) {

    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    var additionalParams = {
      author: 'Author',
      createdAt: new Date(),
      userId: user._id
    }

    //_.extend(modifier, additionalParams);

    // returns the no. of matched docs
    Posts.update(documendId, modifier);

    return Posts.findOne(documendId);
  },

  deletePost: function(_id) {
    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    Posts.remove(_id);
  }

});