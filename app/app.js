/*
    Main app module
*/

var demoAngular = angular.module('demoAngular', [
    'ngRoute',
    'app.directives.itemDetail',
    'app.services.itemService'
]);

demoAngular.config(function ($routeProvider) {
    $routeProvider.when('/item',
        {
            templateUrl: 'app/controllers/templates/itemList.html',
            controller: 'ItemListController'
        })
    .when('/items',
        {
            templateUrl: 'app/controllers/templates/itemList.html',
            controller: 'ItemListController'
        })
    .when('/item/:itemId',
        {
            templateUrl: 'app/controllers/templates/itemDetail.html',
            controller: 'ItemDetailController'
        })
    .otherwise({
        redirectTo: '/'
    });
});