'use strict';


angular.
    module('myBlog').
    config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/', {
            template: '<blog-main></blog-main>'
        }).
        when('/new-article', {
            template: '<new-article></new-article>'
        }).
        when('/my-articles', {
            template: '<my-articles></my-articles>'
        }).
        otherwise('/');

}]);