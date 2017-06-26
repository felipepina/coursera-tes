(function () {
"use strict";

angular.module('public')
    .controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['MenuService', 'RegisterService'];

function NewsletterController(MenuService, RegisterService) {
    var newsletterCtrl = this;

    newsletterCtrl.submit = function () {
        MenuService.getMenuItemDetail(newsletterCtrl.user.favdish).then(
            function (result) {
                if(result){
                    newsletterCtrl.saved = true;
                    newsletterCtrl.msg = "Your information has been saved";
                    newsletterCtrl.user.menuItem = result;
                    RegisterService.save(newsletterCtrl.user);
                } else {
                    newsletterCtrl.saved = false;
                    newsletterCtrl.msg = "No such menu number exists";
                }
            }
        );
    };
}

})();