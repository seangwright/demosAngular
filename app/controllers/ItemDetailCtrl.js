/*

    Item Detail Controller

*/

demoAngular.controller('ItemDetailCtrl', ['$scope', '$routeParams', 'ItemService',
    function ($scope, $routeParams, ItemService) {

        init();

        // init
        //      initializes all the values attached to $scope
        function init() {
            $scope.CurrentPageName = "Item Detail";

            $scope.items = ItemService.getItems();
            $scope.itemId = $routeParams.itemId;
            $scope.currentItem = $scope.items[$scope.itemId];

            $scope.InputBoxTitle = "Detail For: " + $scope.currentItem.itemName;
        }
    }]);