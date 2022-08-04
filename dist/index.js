"use strict";
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressStore extends Store {
    compress() { }
}
let store = new CompressStore();
store.add({ name: 'SmartWatch', price: 10 });
store.compress();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
//# sourceMappingURL=index.js.map