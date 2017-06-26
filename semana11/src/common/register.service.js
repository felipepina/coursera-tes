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
        // return service.user;

        return {
  "firstname": "Felipe",
  "lastname": "Pina",
  "email": "felipe.pina@pobox.com",
  "phone": "123-123-1234",
  "favdish": "A1",
  "menuItem": {
    "id": 1,
    "short_name": "A1",
    "name": "Won Ton Soup with Chicken",
    "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
    "price_small": 2.55,
    "price_large": 5,
    "small_portion_name": "pint",
    "large_portion_name": "quart",
    "created_at": "2017-06-25T20:44:48.339Z",
    "updated_at": "2017-06-25T20:44:48.339Z",
    "category_short_name": "A",
    "image_present": true
  }
}
        
    };
}

})();