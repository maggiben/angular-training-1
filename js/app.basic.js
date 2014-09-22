// My cool app
angular.module('myCoolApp', [])

angular.module('myCoolApp').controller('MainCtrlV1', function($scope) {
  $scope.person = {
    name: "Martin Gonto",
    older: true
  };

  $scope.likeAlcohol = function() {
    if ($scope.person.older) {
        alert("Yey");
    } else {
        alert("You can't like alcohol, you're not old enough");
    }
  }
});

angular.module('myCoolApp').controller('MainCtrlV2', function($scope, Alerter) {
  $scope.person = {
    name: "Martin Gonto",
    older: true
  };

  $scope.likeAlcohol = function() {
    if ($scope.person.older) {
        Alerter.alert("Yey")
    } else {
        Alerter.alert("You can't like alcohol, you're not old enough");
    }
  }
});

angular.module('myCoolApp').factory('Alerter', function() {
  var service = {};

  service.alert = function(msg) {
    alert(msg)
  }

  return service;

});

angular.module('myCoolApp').provider('Alerter', function() {

  this.title = "Main Dialog";
  this.setTitle = function(title) {
    this.title = title;
  }

  this.$get = function() {
    var title = this.title;
    return {
        alert: function(msg) {
            alert(title + " " + msg);
        }
    }
  }

});

angular.module('myCoolApp').service('Alerter', function() {
  this.alert = function(msg) {
    alert(msg);
  }
});