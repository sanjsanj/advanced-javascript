var ListManager = (function () {

    var getShoppingList,
        countItemsInList,
        addItemToList,
        removeItemFromList,
        shoppingList = [],
        returnObject;

    getShoppingList = function () {
        return shoppingList;
    };

    countItemsInList = function () {
        return shoppingList.length;
    };

    addItemToList = function (item) {
        // See if item is on list already
        var itemPosition = shoppingList.indexOf(item);
        if (itemPosition === -1) {
            // Item is not on list
            shoppingList.push(item);
        }
        return this;
    };

    removeItemFromList = function (item) {
        // See if item is on list... we cant remove it if it is not there!
        var itemPosition = shoppingList.indexOf(item);
        if (itemPosition > -1) {
            // Item is on list, use splice to remove it
            shoppingList.splice(itemPosition, 1);
        }
        return this;
    };
    
    returnObject = {
        count: countItemsInList,
        add: addItemToList,
        remove: removeItemFromList,
        getList: getShoppingList
    };
    
    return returnObject;

})();

// Test the module
var itemsAdded = ListManager.add("apple").add("banana").count();
console.log(itemsAdded); // 2 (i.e. the value returned by "count")

var myList = ListManager.getList();
console.log(myList); // ["apple", "banana"]

ListManager.add("apple").add("pear");
console.log(ListManager.getList()); // ["apple", "banana", "pear"]

ListManager.remove("banana");
console.log(ListManager.getList()); // ["apple", "pear"]
console.log(ListManager.count()); // 2
