beatsNews.controller("ReportersCtrl", function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beats = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatsId),
  $scope.addReporter = addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, yearsEmployed: $scope.yearsEmployed, birthday: $scope.reporterBirthday});
    $scope.reporterName = null;
    $scope.yearsEmployed = null;
    $scope.reporterBirthday = null;
  }
});
