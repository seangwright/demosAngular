/*

    Item Detail Controller

*/

demoAngular.controller('ItemDetailController', ['$scope', '$routeParams', 'ItemService',
    function ($scope, $routeParams, ItemService) {

        init();

        // init
        //      initializes all the values attached to $scope
        function init() {
            $scope.page = {};

            $scope.page.CurrentPageName = "Item Detail";

            $scope.page.items = ItemService.getItems();
            $scope.page.itemId = $routeParams.itemId;
            $scope.page.currentItem = $scope.page.items[$scope.page.itemId];

            $scope.page.InputBoxTitle = "Detail For: " + $scope.page.currentItem.itemName;
        }
    }]);