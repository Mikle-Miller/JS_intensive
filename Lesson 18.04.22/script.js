//Exercise1)

let numOne = Number(prompt('Введите первое число'));
let numTwo = Number(prompt('Введите второе число'));
if (numOne && numTwo && numTwo < 37) {
    numOne = numOne.toString(numTwo);
    console.log(numOne);
} else {
    console.log('Некорректный ввод!');
}

//Exercise2)

let numValidOne = Number(prompt('Введите первое число'));
let numValidTwo = Number(prompt('Введите второе число'));

if (!numValidOne || !numValidTwo) {
    console.log('Некорректный ввод!');
} else {
    console.log(`Ответ: ${numValidOne + numValidTwo} , ${numValidOne / numValidTwo}`);
}