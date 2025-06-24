for (let i = 10 ; i <= 25; i++) {
    console.log(i)
}

//

let i= 0;

while (i <= 10) {
    console.log(i);
    i++;
}

//

let n = 0;

do {
    console.log(n);
    n++;
} while (n <= 15)

//

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i]);
    }
}