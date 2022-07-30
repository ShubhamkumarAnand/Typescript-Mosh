"use strict";
const employees = {
    id: 1,
    name: 'Shubham',
    retire: (date) => {
        console.log(date);
    },
};
console.log(employees);
employees.name = 'jesus';
employees.retire(new Date());
console.log(employees);
//# sourceMappingURL=index.js.map