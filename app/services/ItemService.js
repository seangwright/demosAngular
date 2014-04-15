/*

    Item service -
        This service supplies access to the item array used by the app.
        Through its methods one can access the entire array or individual items
        Adding, updating and removing items is also possible

*/

angular.module('app.services.itemService', [])
    .service('ItemService', function () {

        this.getItems = function () {
            return this.items;
        };

        this.setItems = function (items) {
            this.items = items;
        };

        this.getItemById = function (id) {
            for (var item in this.items) {
                if (item.itemId == id) {
                    return item;
                }
            }
        };

        this.getItemByIndex = function (index) {
            return this.items[index];
        };

        this.setItem = function (item) {
            for (var itemItr in this.items) {
                if (itemItr.itemId == item.itemId) {
                    itemItr.itemName = item.ItemName;
                    itemItr.itemDescription = item.itemDescription;
                }
            }
        };

        this.addItem = function (item) {
            this.items.push(item);
        };

        this.removeItemById = function (id) {
            for (var x = 0; x < this.items.length; x++) {
                if (this.items[x].itemId == id) {
                    this.items.splice(x, 1);
                    return;
                }
            }
        };

        this.removeItemByIndex = function (index) {
            this.items.splice(index, 1);
        };
    });