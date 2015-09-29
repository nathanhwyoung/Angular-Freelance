FreelanceApp.directive("hometext",function(){
  return {
    template: "Back to the Beginning"
  }
});

FreelanceApp.directive("changeClass",function(){
  return function (scope, element, attrs){
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
});

FreelanceApp.directive("sampleCourse", function() {
  return{
    scope:{
      courseName:"@"
    },
    template: '<div>{{courseName}}</div>'
  }
});

FreelanceApp.directive("alertUser", function () {
  return {
    scope: {
      yell: "&"
    },
    template:'<input type="text" ng-model="value">' +
      '<div class="btn btn-default" ng-click="yell({message:value})">message</div>'
      }
});

FreelanceApp.directive("debug",function($compile){
  return{
    terminal: true,
    priority: 100000,
    link: function (scope, element){
      var clone = element.clone();
      element.attr("style","color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
})
