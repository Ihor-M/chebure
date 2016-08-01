'use strict';


app.controller('MyArticlesController', function ($http, $scope) {
    $scope.myPosts = [];

    $http.get("http://myblog.com/api/my-articles").then(function (response) {
        $scope.myPosts = response.data.data;
    })
});

angular.
    module('myArticles').
    component('myArticles', {
        templateUrl: 'blog/pages/my-articles.html',
        controller: 'MyArticlesController'
});