angular.module('app.directives.itemDetail', [])
    .directive('itemDetail', function () {
        return {
            restrict: 'E',
            scope: {
                item: '=',
                removeItem: '&'
            },
            replace: true,
            transclude: true,
            templateUrl: "app/templates/directives/itemDetail.html",
            link: function (scope, element, attrs) {},
            controller: function ($scope) {}
        };
    });