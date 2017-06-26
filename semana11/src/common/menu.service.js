(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath', '$q'];

  function MenuService($http, ApiPath, $q) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {
          'category': category
        };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItemDetail = function (menuItem) {
      console.log(menuItem);
      if (!menuItem) {
        var deferred = $q.defer();
        deferred.resolve(null);
        return deferred.promise;
      }
      return $http.get(ApiPath + '/menu_items/' + menuItem + '.json').
      then(
        function (response) {
          return response.data;
        },
        function (response) {
          if (response.status == 500) {
            return null;
          }
        });

    }

  }



})();