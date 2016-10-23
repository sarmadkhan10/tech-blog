Meteor.publish('allPosts', function(){
  return Posts.find();
});

Meteor.publish('singlePost', function(id){
  return Posts.find(id);
});

Meteor.publish('limitedPosts', function(count, offset){
	return Posts.find({}, {sort: {createdAt: -1}, skip: offset, limit: count});
});