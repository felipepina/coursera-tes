(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/main-list.template.html',
                controller: 'MainController as mainCtrl',
                resolve: {
                    categoryList: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categories.items', {
                url: '/{categorySN}',
                templateUrl: 'src/items-list.html',
                controller: "ItemsController as itemsCtrl",
                params: {
                    categorySN: null
                },
                resolve: {
                    itemList: ['$stateParams', 'MenuDataService',
                                function (stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory(stateParams.categorySN);
                    }]
                }
            })
            ;
    }
})();