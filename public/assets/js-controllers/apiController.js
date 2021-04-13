app.controller("apiCtrl", function ($scope, $location) {
    $scope.fullUrl = $location.host();
});