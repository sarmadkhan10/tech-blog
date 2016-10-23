MainPageController = BaseController.extend({
  template: 'postsList',

  action: function(){
    var current_page = 1;
    if (this.params.page_no)
      current_page = this.params.page_no;

    this.state.set('current_page', current_page);
    this.render();

    if (current_page == 1)
      this.render('loadPostsSingle', {to: 'navigator'});
    else
      this.render('loadPostsDouble', {to: 'navigator'});
  },

  findOptions: function() {
    return { sort: {createdAt: -1} };
  },

  waitOn: function() {
    var limit = Session.get('limit');
    var offset = 0;

    if (this.params.page_no)
      offset = (this.params.page_no*limit)-limit;

    var sub_hndl = Meteor.subscribe('limitedPosts', limit, offset);

    Session.set('posts_sub_id', sub_hndl.subscriptionId);
    return sub_hndl;
  },

  onStop: function () {
    return Meteor.default_connection._subscriptions[Session.get('posts_sub_id')].stop();
  },

  data: function(){
    return { posts: Posts.find({}, this.findOptions()) };
  }
});