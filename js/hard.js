let num = 266219;
let axe = 3;

// перемножены все цифры данного числа 
console.log(eval(num.toString().split('').join('*')));
// перменоженые цифры возведены в степень 3 с помощью **
console.log(eval(num.toString().split('').join('*'))** axe);
// выведены на экран первые две цифры числа в 3 степени 
alert((eval(num.toString().split('').join('*'))** axe).toString().slice(0, 2));
