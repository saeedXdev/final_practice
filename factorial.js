
const wishHello = function()
{
    console.log("Hello world!");
}

const factorial = function(val)
{
    if(val===0 || val===1)
        return 1;

       return val * factorial(val-1); 
}

const val = Number(prompt("Please Enter the values : "));
console.log(factorial(val));
//adding sum function.

const sum = function(val1,val2)
{
    return val1+val2;
}

console.log(sum(val,val));


//adding subtraction function....

let a=34;
let b=90;
let c=903;
const name ="saeed anwar ansari";

const sub = function(val1,val2)
{

    if(val1 > val2)
        return val1 / val2;
    
    return val1 * val2;

}


