/*
    Main app controllers
*/

demoAngular.controller('HomeCtrl', function ($scope) {

    init();

    // init
    //      initializes all the values attached to $scope
    function init() {
        $scope.CurrentPageName = "Home";
        $scope.InputBoxTitle = "Create a new item";
        $scope.items = [];
    }

    // addItem
    //      creates a new item with the name provided by the $scope.newItem value
    //      and then adds it to the object array $scope.items
    $scope.addItem = function () {
        var newItem = { "itemName": "", "itemId": "" };
        newItem.itemName = $scope.newItemName;
        newItem.itemDescription = $scope.newItemDescription;

        // This creates a GUID
        newItem.itemId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16)
        });

        $scope.items.push(newItem);
    };

    // removeItem
    //      removes an item from the object array $scope.items by its index in the array
    $scope.removeItem = function (id) {
        $scope.items.splice(id, 1);
    };
});