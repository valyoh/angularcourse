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

      toBuyController.isEmpty = ShoppingListCheckOffService.isEmptyToBuy();
      toBuyController.notEmpty = ShoppingListCheckOffService.isAlradyBoughtNotEmpty();

      toBuyController.markItemAsBought = function (itemIndex) {
        ShoppingListCheckOffService.updateArrays(itemIndex);
        toBuyController.isEmpty = ShoppingListCheckOffService.isEmptyToBuy();
        toBuyController.notEmpty = ShoppingListCheckOffService.isAlradyBoughtNotEmpty();
      }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var alreadyBoughtController = this;
      alreadyBoughtController.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
      alreadyBoughtController.notEmpty = ShoppingListCheckOffService.isAlradyBoughtNotEmpty();
    }

    function ShoppingListCheckOffService() {
      var service = this;
      var alreadyBoughtItems = [];

      var toBuyItems = [
        // "1","2","3"];
        { name: "Beer", quantity: 200 },
        { name: "Vodka", quantity: 90 },
        { name: "Wine", quantity: 250 },
        { name: "Cookies", quantity: 10 },
        { name: "Orange Juice", quantity: 100 }
      ];

      service.updateArrays = function(itemIndex) {
        var item = toBuyItems[itemIndex];

        alreadyBoughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);

      };

      service.getAlreadyBoughtItems = function () {
          return alreadyBoughtItems;
      };

      service.getToBuyItems = function () {
        return toBuyItems;
      };

      service.isEmptyToBuy = function () {
        return (toBuyItems.length == 0);
      }

      service.isAlradyBoughtNotEmpty = function () {
        return (alreadyBoughtItems.length > 0);
      }
    }

})();
