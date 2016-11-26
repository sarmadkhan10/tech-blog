SinglePostController = BaseController.extend({
  template: 'postPage',

  action: function(){
  	this.state.set('document_id', this.params._id);

  	this.render();
  },

  waitOn: function(){
    return Meteor.subscribe('singlePost', this.params._id);
  },

  data: function() {
  	return Posts.findOne(this.params._id);
  }
});