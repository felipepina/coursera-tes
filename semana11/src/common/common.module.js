(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://gentle-beyond-89574.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
