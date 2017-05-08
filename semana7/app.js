(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.checkMenu = function(){
        //console.log($scope.menu);
        $scope.message = countMenu($scope.menu);
    }
}

function countMenu(menu){
    if(menu == null || menu.length === 0) {
        return "Please enter data first";
    }

    var items = menu.split(",");    
    if(items.length <= 3) {
        return "Enjoy!";
    } else {
        return "Too much!"
    }
}

})();