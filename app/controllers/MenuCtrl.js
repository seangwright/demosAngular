/*

    Menu Controller

*/

demoAngular.controller('MenuCtrl', ['$scope', '$routeParams', 'ItemService',
    function ($scope, $routeParams, ItemService) {

        init();

        // init
        //      initializes all the values attached to $scope
        function init() {
            $scope.CurrentPageName = "Home";

            // Create a menu to navigate around the app
            $scope.menu = [
                {
                    'title': 'Home',
                    'link': '/'
                },
                {
                    'title': 'List of Items',
                    'link': '#/items'
                }
            ];

            /* Not Currently Working => When item is deleted menu is not updated
            if (items.length > 0) {
                $scope.menu.push(
                {
                    'title': 'Details for [' + items[0].itemName + ']',
                    'link': '#/item/' + 0
                });
            }
            */

            // Pick a random item to display in the menu
            $scope.randomizeMenu = function () {

                /* Not Currently Working => When item is deleted menu is not updated
                var items = ItemService.getItems();

                if (items.length > 0) {
                    var randomIndex = Math.floor(Math.random() * items.length);
                    var randomItem = items[randomIndex];

                    $scope.menu.splice($scope.menu.length - 1, 1);

                    $scope.menu.push(
                    {
                        'title': 'Details for [' + randomItem.itemName + ']',
                        'link': '#/item/' + randomIndex
                    });

                }
                */
            };
        }
    }]);