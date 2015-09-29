FreelanceApp.controller('HeadersCtrl', function HeadersCtrl($scope) {
  $scope.message = "I am Header Control";
  console.log($scope.message);
  $scope.logo = {url: 'img/freelancer-logo.png'};

  $scope.headerElements = {logo:'img/freelancer-logo.png', loginBtn: {url:'balls'} };

});

FreelanceApp.controller('PortalCtrl', function PortalCtrl($scope) {

  $scope.alertMyBalls = function (message) {
    alert(message);
    console.log("CourseAlertFunction run in portal");
  }
  $scope.message = "I am Portal Control";
  console.log($scope.message);
});

FreelanceApp.controller('FooterCtrl', function FooterCtrl($scope) {
  $scope.message =  "I am Footer Control";
  console.log($scope.message);
});

FreelanceApp.controller('SuggestionCtrl', function SuggestionCtrl($scope) {
  $scope.message =  "I am Suggestor the controllor...and the dragon comes in the night!!!!";
  console.log($scope.message);
});
