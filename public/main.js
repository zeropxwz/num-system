"use strict";
// function toOther (num: number, sys: number): string {
//     let res: string = ''
//     while (num >= sys) {
//         res += String(Math.floor(num % sys))
//         num  = Number(Math.floor(num / sys))
//     }
//     res += String(num)
//     return res.split('').reverse().join().replace(/,/g, '') 
// }
// console.log(
//     toOther(5, 2) // вывидет 101
// )
function toDecimal(num, sys) {
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res += Number(num[i]) * Math.pow(sys, num.length - i - 1);
    }
    return res;
}
console.log(toDecimal('101', 2));
