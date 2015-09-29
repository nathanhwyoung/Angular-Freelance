courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.courseName = "SCIENCE";
  $scope.alertMyBalls = function (message) {
    alert(message)
  }
});
