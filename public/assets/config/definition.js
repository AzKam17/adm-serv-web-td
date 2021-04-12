var app = angular.module('myApp', ["ngRoute"]);
    app.config(function($interpolateProvider){ $interpolateProvider.startSymbol('//').endSymbol('//'); });
