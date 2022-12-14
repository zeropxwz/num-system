## Системы счисления  

### Перевод из ДЕСЯТИЧНОЙ системы в лубую ДРУГУЮ

Чтобы перевести целое число в любую другю систему счисление, нужно это число разделить на основание той системы счисления в которую производится перевод. Остаток выписываем в строку, а часное снова делим на основание той системы счисления в которую переводим. Продолжаем до тех пор, пока частное не будет меньше основания системы счисления в которую идет перевод. После чего делаем реверс полученой строки из остатков.

#### Перевод числа 46 в двоичную систему счисления:  

```ts
46 / 2 = 23 (остаток 0)  
23 / 2 = 11 (остаток 1)  
11 / 2 = 5  (остаток 1)  
5  / 2 = 2  (остаток 1)  
2  / 2 = 1  (остаток 0)  
1  < 2      (записыв 1)  

результат: 46 = 101110
```  

<img src="/toOther.jpg" width="300">  

#### перевод из десятичной системы счисления в двоичную на TypeScript

```ts
function toOtherSystem (num: number, sys: number): string {

    let res: string = ''

    while (num >= sys) {
        res += String(Math.floor(num % sys))
        num  = Number(Math.floor(num / sys))
    }

    res += String(num)

    return res.split('').reverse().join().replace(/,/g, '') 
}

console.log(
    toOtherSystem(5, 2) // вывидет 101
)
```  

### Перевод из ЛЮБОЙ системы в лубую ДЕСЯТИЧНУЮ

Чтобы перевести число из любой системы в десятичную,нужно число каждого разряда умножить на основание системы счисления в степени разряда, после чего сложить все произведения.  

#### Перевод восьмеричного числа 511 в десятичную систему счисления:  

```ts
511(oct) = (5 * 8^2) + (1 * 8^1) + (1 * 8^0) = (5 * 64) + (1 * 8) + (1 * 1) = 320 + 8 + 1 = 329(dec)
                                        n^0=1                         
```  

#### Перевод двоичного числа 101 в десятичную систему счисления:  

```ts
101(bin) = (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = (1 * 4) + (0 * 2) + (1 * 1) = (4) + (0) + (1) = 5(dec)
                                        n^0=1
```

#### перевод из двоичной (или любой другой) системы счисления в десятичную на TypeScript:  

```ts
function toDecimal(num: string, sys: number): number {

    let res: number = 0

    for (let i = 0; i < num.length; i++) {
        res += Number(num[i]) * Math.pow(sys, num.length - i - 1)
    }

    return res
}

console.log(
    toDecimal('101', 2) // вывидет 5
)
```


