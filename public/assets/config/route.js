app.config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/assets/templates/home.html"
            })
            .when("/verb", {
                templateUrl : "/assets/templates/verbs.html",
                controller : "verbsCtrl"
            })
            .when("/api", {
                templateUrl : "/assets/templates/api.html",
                controller : "apiCtrl"
            })
            .when("/blog", {
                templateUrl : "/assets/templates/blog.html",
                controller : "blogCtrl"
            })
            .otherwise('/verb');
    }
]);
