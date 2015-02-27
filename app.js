var beatsNews = angular.module('beatsNews', ['ui.router']);

beatsNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
      url: "/beats",
      templateUrl: "partials/beats.html",
      controller: 'BeatsCtrl'
  });

});