(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'itemList'];

  function ItemsController($stateParams, itemList) {
    console.log(this);
    console.log($stateParams);
    console.log(itemList);

    var itemsCtrl = this;
    itemsCtrl.itemList = itemList;
  }

})();