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

  $stateProvider.state('beats.reporters', {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: "ReportersCtrl"
  });

  $stateProvider.state('reporters', {
    url: "/reporters/:reporterId",
    templateUrl: "partials/reporters.html",
    controller: "ReporterInfoCtrl"
  });
});
