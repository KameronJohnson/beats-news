beatsNews.controller('ReporterInfoCtrl', function ReporterInfoCtrl($scope, $stateParams, UtilitiesFactory, ReportersFactory, BeatsFactory){
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ReportersFactory = ReportersFactory;
  $scope.BeatsFactory = BeatsFactory;
  $scope.reporter = UtilitiesFactory.findById(ReportersFactory.reporters, $stateParams.reporterId)
});
