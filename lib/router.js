Router.configure({
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound'
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/new', {
  name: 'newPost',
  controller: 'BaseController'
});

Router.route('/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController'
});

Router.route('/pages/:page_no', {
	name: 'pages',
	controller: 'MainPageController',
});

Router.route('/edit/:_id', {
  name: 'editPost',
  controller: 'EditPostController'
});

Router.route('delete/:_id', {
  name: 'deletePost',
  controller: 'DeletePostController'
});