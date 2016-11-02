import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';

Template.mainLayout.created = function() {
	Session.set('limit', 5);
},

//Template.loadPosts.events({
//	"click .loadPostsBtn": function(event) {
//		Session.set('limit', Session.get('limit') + 5);
//	}
//});

Template.loadPostsSingle.events({
	'click #loadPostsBtn': function() {
		var cont = Iron.controller();
		var current_page = parseInt(cont.state.get('current_page'));

		Router.go('pages', {page_no: current_page+1});
	}
});

Template.loadPostsDouble.events({
	'click #older': function() {
		var cont = Iron.controller();
		var current_page = parseInt(cont.state.get('current_page'));

		Router.go('pages', {page_no: current_page+1});
	},

	'click #newer': function() {
		var cont = Iron.controller();
		var current_page = parseInt(cont.state.get('current_page'));

		Router.go('pages', {page_no: current_page-1});
	}
});

Template.postPage.onRendered(function() {
	document.title = this.data.title;
});

Template.postsList.onRendered(function() {
	document.title = "techtoc";
});