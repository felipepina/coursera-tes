(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
        toBuyList.addItem = function (itemName, quantity) {
            ShoppingListCheckOffService.addItem(itemName, quantity);
        }
        toBuyList.markAsBought = function (itemIndex) {
            ShoppingListCheckOffService.markAsBought(itemIndex);
        }
        toBuyList.isEmpty = function () {
            return this.items.length == 0;
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
        boughtList.isEmpty = function () {
            return this.items.length == 0;
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // var toBuyItems = [];
        var toBuyItems = [{
                name: "Beer pack",
                quantity: 3
            },
            {
                name: "Salami",
                quantity: 1
            },
            {
                name: "Cheese",
                quantity: 2
            },
            {
                name: "Bread",
                quantity: 4
            },
        ];
        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            }
            toBuyItems.push(item);
        }

        service.markAsBought = function (itemIndex) {
            var boughtItem = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(boughtItem);
        }
    }

})();