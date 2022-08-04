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
//# sourceMappingURL=index.js.map