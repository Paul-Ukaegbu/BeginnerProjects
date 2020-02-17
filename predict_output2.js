var num1 = 10;
var num2 = 5;
if(num1 % num2 == 0){
    num1 += 3;
    num2 += 4;
}
//num1 is now 13. num2 is now 9
else if(num1 % 2 == 0){
    num1 = num2 / 3;
}
else{
    num2 = num1 / 2;
}
if(num1 == 13){
    num1 = num1 / 2;
    num2 = Math.trunc(num1);
}
//num1 is now 6.5, and num2 is now 6
if(num2 % 3 == 0){
    num1 += 4.5;
}
//num1 is now 11
else{
    num1 -= 2;
}
console.log(num1); //11
console.log(num2);//6
