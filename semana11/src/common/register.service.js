(function () {
"use strict";

angular.module('common')
    .service('RegisterService', RegisterService);

RegisterService.$inject = [];

function RegisterService() {
    var service = this;
    var user;

    service.save = function (user) {
        console.log(user);
        service.user = user;
    };

    service.retrieve = function () {
        return service.user;
    };
}

})();