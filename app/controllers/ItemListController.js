/*

    Item List Controller

*/

demoAngular.controller('ItemListController', ['$scope', '$routeParams', 'ItemService',
    function ($scope, $routeParams, ItemService) {

        init();

        // init
        //      initializes all the values attached to $scope
        function init() {
            $scope.page = {};

            $scope.page.CurrentPageName = "Item Detail";
            $scope.page.InputBoxTitle = "Add an Item";
            $scope.page.items = ItemService.getItems();
        }

        // addItem
        //      creates a new item with the name provided by the $scope.newItem value
        //      and then adds it to the object array $scope.items
        //      also adds item to ItemService
        $scope.page.addItem = function () {

            var newItem = {};
            newItem.itemName = $scope.page.newItemName;
            newItem.itemDescription = $scope.page.newItemDescription;

            // This creates a GUID
            newItem.itemId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16)
            });

            // Add item to ItemService
            ItemService.addItem(newItem);

            // Refresh local scope items
            $scope.page.items = ItemService.getItems();

            // Clear values out scope newItem => clears values out of databound text boxes
            $scope.page.newItemName = "";
            $scope.page.newItemDescription = "";
        };

        // removeItem
        //      removes an item from the object array $scope.items by its index in the array
        //      also removes item from ItemService
        $scope.page.removeItem = function (index) {

            // Remove item from ItemService
            ItemService.removeItemByIndex(index);

            // Refresh local scope items
            $scope.page.items = ItemService.getItems();
        };

    }]);