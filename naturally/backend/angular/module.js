var app = angular.module('appNaturally', ['ngRoute']);
app.service('naturallili',function ($scope, $http) {
    $scope.people;
    $scope.getPeople = function() {
        $http({

            method: 'GET',
            url: '/api/get.php'

        }).success(function (response) {

            // on success
            $scope.people = response.data;

        }) .error(function (response) {

            // on error
            console.log(response.data,response.status);

        });
    };
})
app.controller('naturallyController', ['$scope', '$window', function ($scope, $window, naturallili) {

    $window.fbAsyncInit = function () {
        FB.init({
            appId: 278997635938705,
            xfbml: true,
            cookie: true,
            version: 'v2.10',
            status: true
        });

        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                // esta conectado
            } else if (response.status === 'not_authorized') {
                // nao autorizado
            } else {
                // nao esta logado no facebook
            }
        });

    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $scope.facebook = {
        username: "",
        email: ""
    };

    $scope.login = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', 'GET', {fields: 'email, about, first_name, last_name, name, gender, locale, id, link, picture.width(1000).height(1000)'}, function (response) {
                    $scope.$apply(function () {
                        $scope.facebook.name = response.name;
                        $scope.facebook.first_name = response.first_name;
                        $scope.facebook.last_name = response.last_name;
                        $scope.facebook.email = response.email;
                        $scope.facebook.image = response.picture.data.url;
                        $scope.facebook.link = response.link;
                        $scope.facebook.gender = response.gender;
                        $scope.facebook.locale = response.locale;
                        $scope.response=naturallili;
                    })
                });

            } else {
            }
        }, {
            scope: 'publish_actions, email, user_likes',
            return_scopes: true
        });
    }
    $scope.logout = function () {
        FB.logout(function(response) {
            // Person is now logged out
        });
    }
}]);