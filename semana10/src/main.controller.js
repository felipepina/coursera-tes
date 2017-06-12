(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MainController', MainController);

    MainController.$inject = ['categoryList']

    function MainController(categoryList) {
        var mainCtrl = this;
        mainCtrl.categoryList = categoryList;
    };
})();