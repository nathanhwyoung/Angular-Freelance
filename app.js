var FreelanceApp = angular.module('FreelanceApp', ['ui.router']);
//debugger;
FreelanceApp.config(function($stateProvider, $urlRouterProvider ) {
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
      'suggestions': {
        templateUrl: "partials/suggestions.html",
        controller: 'SuggestionCtrl'
      },
    }
  });


});
