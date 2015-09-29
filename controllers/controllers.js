FreelanceApp.controller('HeadersCtrl', function HeadersCtrl($scope) {
  $scope.message = "I am Header Control";
  console.log($scope.message);

  $scope.headerElements = {logo:'url', loginBtn: {url:'balls'} };

});

FreelanceApp.controller('PortalCtrl', function PortalCtrl($scope) {

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
