'use strict';


app.controller('CategoriesController', function ($scope, $http) {
    $scope.latestNews = [];
    $scope.carsCategiries = [];
    $scope.technologyCategories = [];
    $scope.sportsCategories = [];

    $http.get("http://myblog.com/api/breaking-news").then(function (response) {
        $scope.latestNews = response.data.data;
    });
    $http.get("http://myblog.com/api/cars-and-vehicles").then(function (response) {
        $scope.carsCategiries = response.data.data;
    });
    $http.get("http://myblog.com/api/technology").then(function (response) {
        $scope.technologyCategories = response.data.data;
    });
    $http.get("http://myblog.com/api/sports").then(function (response) {
        $scope.sportsCategories = response.data.data;
    });
});


angular.
module('sideMenu').
component('sideMenu', {
    templateUrl: 'blog/partials/side-menu.html',
    controller:'CategoriesController'
});

