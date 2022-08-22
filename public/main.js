"use strict";
function toOtherSystem(num, sys) {
    let res = '';
    while (num >= sys) {
        res += String(Math.floor(num % sys));
        num = Number(Math.floor(num / sys));
    }
    res += String(num);
    return res.split('').reverse().join().replace(/,/g, '');
}
console.log(toOtherSystem(5, 2) // вывидет 101
);
