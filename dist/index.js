"use strict";
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let user = fetch('www.example.com/users');
console.log(user.data?.fullName);
let product = fetch('www.example.com/products');
console.log(product.data?.title);
//# sourceMappingURL=index.js.map