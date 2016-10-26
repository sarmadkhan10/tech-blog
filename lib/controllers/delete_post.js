DeletePostController = RouteController.extend({
	action: function() {
		Meteor.call('deletePost', this.params._id);

		this.redirect('/');
	}
});