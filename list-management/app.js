(function() {
  'use strict'

  angular.module('app', [])
    .component('cart', {

      controller: function() {
        const vm = this

        vm.$onInit = function $onInit() {
          vm.items = [{name: "Rug", quantity : 3}, {name : "Couch", quantity : 2}]
        }

        vm.addItem = function addItem() {
          vm.items.push(vm.item)
          delete vm.item
        }

        vm.deleteItem = function deleteItem(e, item) {
          e.preventDefault()
          vm.items.splice(vm.items.indexOf(item), 1)
        }
      },

      template: `
      <form ng-submit="$ctrl.addItem()">
          <p><label for="name">Name </label><input id="name" type="text" ng-model="$ctrl.item.name" /></p>
          <p><label for="quantity">Quantity </label><input id="quantity" type="text" ng-model="$ctrl.item.quantity" /></p>
          <p><button type="submit">Add Item</button></p>
      </form>
      <div ng-repeat="item in $ctrl.items">
        <strong>{{item.name}} {{item.quantity}} <a href="#" ng-click="$ctrl.deleteItem($event, item)">Delete</a></strong>
      </div>
`
    })

})();
