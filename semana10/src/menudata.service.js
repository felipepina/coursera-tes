// Create menudata.service.js file and create a service called MenuDataService in it. This service should be declared on the data module, not on the MenuApp module. The MenuDataService should have 2 methods:
// getAllCategories - this method should return a promise which is a result of using the $http service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
// getItemsForCategory(categoryShortName) - this method should return a promise which is a result of using the $http service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.

(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);
        // .constant(ENTRY_POINT, 'https://davids-restaurant.herokuapp.com/categories.json');

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        //TODO Criar constante para as URLs

        service.getAllCategories = function () {
            var ENTRY_POINT = 'https://davids-restaurant.herokuapp.com/categories.json';
           return $http({
                method: 'GET',
                url: ENTRY_POINT
            }).then(function successCallback(response) {
                var categories = response.data;
                // console.log(response);

                // console.log(response);

                return categories;
            }, function errorCallback(response) {
                // 
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            console.log("getItemsForCategory " + categoryShortName)

            var ENTRY_POINT = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";

            return $http({
                method: 'GET',
                url: ENTRY_POINT + categoryShortName
            }).then(function successCallback(response) {
                var items = response.data.menu_items;
                // console.log(response);

                // console.log(response);

                return items;
            }, function errorCallback(response) {
                // 
            });
        }
    }
})();