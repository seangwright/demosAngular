/*

    Item Detail directive

*/


angular.module('app.directives.itemDetail', [])
    .directive('itemDetail', function () {
        return {
            restrict: 'E',
            scope: {
                item: '=',
                removeItem: '&',
                index: '='
            },
            replace: true,
            transclude: true,
            templateUrl: "app/directives/templates/itemDetailDir.html",
            link: function (scope, element, attrs) {},
            controller: function ($scope) {}
        };
    });