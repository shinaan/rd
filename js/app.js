'use strict';

/* App Module */

angular.module('roadha', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'partials/home.html'}).
        when('/cafe', {templateUrl: 'partials/cafe.html', controller: CafeCtrl}).
        when('/cafe/:cafeId', {templateUrl: 'partials/viewcafe.html', controller: ViewCafeCtrl}).
        when('/search', {templateUrl: 'partials/search.html'}).
        when('/feat', {templateUrl: 'partials/feature.html'}).
        when('/imsaak', {templateUrl: 'partials/imsaak.html'}).
        otherwise({redirectTo: '/home'});
}]);

function CafeCtrl($scope, $http)
{
    $('#loader').css('display','block');
    $http.get('partials/cafe.json').
        success(function(data) {
            $scope.cafes = data;
            $('#loader').css('display','none');
        });
}

function ViewCafeCtrl($scope, $http, $routeParams)
{
    $('#loader').css('display','block');
    $http.get('partials/cafes/cafe'+$routeParams.cafeId+'.json').
        success(function(data) {
            $scope.cafe = data;
            $('#loader').css('display','none');
        });
}