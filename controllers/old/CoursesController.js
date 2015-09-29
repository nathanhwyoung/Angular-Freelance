courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.courseName = "SCIENCE";
  $scope.courseAlert = function (message) {
    alert(message)
  }
});
