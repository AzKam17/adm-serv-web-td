app.controller("verbsCtrl", function ($scope, $http) {

    $scope.verbs = ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "COPY"];

    $scope.request_val = "";
    $scope.response_val = {};

    $scope.launchAjax = function(){
        $scope.method = this.verb;
        $http({
            method : this.verb,
            url : "/test"
        }).then(function mySuccess(response) {

            $scope.request_val = response.data;

            $scope.response_val["Method"] = response.config.method;
            $scope.response_val["URL"] = response.config.url;
            $scope.response_val["Status"] = response.status;
            $scope.response_val["Accept"] = response.config.headers.Accept;

            console.clear();
            console.log($scope.response_val);
        }, function myError(response) {
            console.log(response.statusText);
        });
    }

});