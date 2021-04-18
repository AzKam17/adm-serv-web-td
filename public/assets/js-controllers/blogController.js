app
    .controller("blogCtrl", function ($rootScope, $route, $location, $scope) {
        $scope.articles = $rootScope.articles;

        $scope.openPost = function(vars){

            $location.path('/blog/' + vars);
            //$route.current.templateUrl = '/blog/' + vars;
            //alert($route.current.templateUrl);
        }
    })
    .controller("blogSingleCtrl", function ($log, $location, $rootScope, $scope, $routeParams) {
        //var rootElement = document.documentElement;
        let returnBlog = true;
        $scope.article = null;
        for (let i = $rootScope.articles.length - 1; i >= 0; i--) {
            if($rootScope.articles[i]['link'] === $routeParams.title){
                $scope.article = $rootScope.articles[i];
                returnBlog = false;
                break;
            }
        }
        if(returnBlog){
            $location.path('/blog');
        }else{
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    });