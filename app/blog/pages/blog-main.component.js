'use strict';


angular.
    module('blogMain').
    component('blogMain', {
        templateUrl: 'blog/pages/blog-main.html',
        controller: ['$http', function BlogMainPageController($http) {
            var self = this;

            $http.get('http://myblog.com/').then(function (response) {
                console.log(response.data.posts);
                self.articles = response.data.posts;
            });
        }]
});

