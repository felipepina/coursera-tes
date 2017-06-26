(function () {
"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/user-info/user-info.html',
  bindings: {
    info: '<'
  }
  // ,
  // controller: UserInfoController
});


// UserInfoController.$inject = ['MenuService'];
// function UserInfoController(MenuService) {
//   var $ctrl = this;
// }

})();
