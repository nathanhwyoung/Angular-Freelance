var freelanceApp = angular.module('freelanceApp', ['ui.router']);
//debugger;
freelanceAPp.config(function($stateProvider, $urlRouterProvider ) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'portal': {
        templateUrl: "partials/portal.html",
        controller: 'PortalCtrl'
      },
      'footer': {
        templateUrl: "partials/footer.html",
        controller: 'FooterCtrl'
      },
    }
  });


});
