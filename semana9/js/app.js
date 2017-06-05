(function () {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowController = this;
        narrowController.searchTerm = "";
        narrowController.found;

        narrowController.narrow = function () {
            MenuSearchService
                .getMatchedMenuItems(narrowController.searchTerm)
                .then(function (list) {
                    narrowController.found = list;
                })
        }

        narrowController.removeItem = function (itemIndex) {
            narrowController.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var service = this;
        service.url = 'https://davids-restaurant.herokuapp.com/menu_items.json';
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: service.url
            }).then(function successCallback(response) {
                var menuItems = response.data.menu_items
                var foundItems = [];
                if (searchTerm.length > 0) {
                    menuItems.forEach(function (menuItem) {
                        if (menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            foundItems.push(menuItem);
                        }
                    }, this);
                }
                return foundItems;
            }, function errorCallback(response) {
                // 
            });
        }
    }

    // FoundItems.$inject = [];
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'menu.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        }

        return ddo;
    }
})();