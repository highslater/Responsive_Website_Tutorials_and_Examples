/* myPortfolio/routes.js */
/**/

Router.configure({
    layoutTemplate: 'layout'
}); // end of Router.configure

Router.route('/', function() {
    this.render('home');
}); // end of Router.route

Router.route('/projects', function() {
    this.render('projects');
}); // end of Router.route

Router.route('/news', function() {
    this.render('news');
}); // end of Router.route
