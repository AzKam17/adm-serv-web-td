var app = angular
    .module('myApp',
        [
            "ngRoute",
            "ngSanitize"
        ]
    )
    .config(function($interpolateProvider){ $interpolateProvider.startSymbol('//').endSymbol('//'); });
