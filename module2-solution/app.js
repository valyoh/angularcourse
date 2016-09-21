(function () {
    'use strict'
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var toBuyController = this;
      toBuyController.items = ShoppingListCheckOffService.getToBuyItems();
      console.log(toBuyController.items);
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var alreadyBoughtController = this;
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [
        // "1","2","3"];
        { name: "Beer", quantity: "200 bottles" },
        { name: "Vodka", quantity: "90 bottles" },
        { name: "Wine", quantity: "250 bottles" },
      ];

      service.getToBuyItems = function () {
        return toBuyItems;
      };
    }

})();
