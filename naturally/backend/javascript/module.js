var app = angular.module('appNaturally', ['ngRoute']);

app.controller('naturallyController', ['$scope', function ($scope) {
    $scope.facebook = {
        username: "",
        email: ""
    };
    $scope.facebookLogin = function () {
        FB.login(function (response) {
           if(response.authResponse) {
               FB.api('/me', 'GET', {fields: 'email, first_name, last_name, name, id, link, picture.width(800).height(800)'}, function(response) {
                   $scope.$apply(function () {
                       $scope.facebook.name = response.name;
                       $scope.facebook.first_name = response.first_name;
                       $scope.facebook.last_name = response.last_name;
                       $scope.facebook.email = response.email;
                       $scope.facebook.image = response.picture.data.url;
                       $scope.facebook.link = response.link;
                   })
               });
           } else {
               //erro
           }
        }, {
            scope: 'email, user_likes',
            return_scopes: true
        });
    }
}]);