var app = angular.module('navbar', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'wourld';
});

app.controller('DropdownCtrl', function($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});
