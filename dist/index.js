"use strict";
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 100 });
//# sourceMappingURL=index.js.map