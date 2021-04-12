app.config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/assets/templates/home.html"
            })
            .when("/verb", {
                templateUrl : "/assets/templates/verbs.html"
            })
            .otherwise('/verb');
    }
]);
