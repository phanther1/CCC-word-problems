function fibb (num) {
let num1 = 0, num2 = 1;

for (let i = 2; i <= num; i++) {
    console.log(num1);
    const next = num1 + num2;
    num1 = num2;
    num2 = next;
console.log(next);
    
    return (next);
}
}
