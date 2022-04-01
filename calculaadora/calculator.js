const numbers=[10, 5, 30, 25];

let sumtot = numbers[0];
let multot = numbers[0];
let divtot = numbers[0];
let subtot = numbers[0];

function sum(num1,num2){
    return num1 + num2;
}

function substract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;

}


numbers.forEach((number,index) => {

    if(index>0){
        sumtot=sum(sumtot,number);
        console.log(sumtot);

        subtot=substract(subtot,number);
        console.log(subtot);

        multot=multiply(multot,number);
        console.log(multot);

        divtot=divide(divtot,number);
        console.log(divtot);

    } 
    
});

