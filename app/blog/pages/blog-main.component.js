'use strict';

app.controller('PostsController', function($scope, $http) {
    $scope.articles = [];
    $http.get("http://myblog.com/api/posts").then(function (response) {
        $scope.articles = response.data.data;
    });
});


angular.
    module('blogMain').
    component('blogMain', {
        templateUrl: 'blog/pages/blog-main.html',
        controller: 'PostsController'
});