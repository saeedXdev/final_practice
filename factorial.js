
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

let desc = "This is production level and final then we will going to merge it with ";
let myobj = {
    fname : "Ansari",
    mname : "Saeed Anwar",
    contact : "8980742307",
    gender :"male"
}

let a=34;
let b=90;
let c=903;

const sub = function(val1,val2)
{

    if(val1 > val2)
        return val1 / val2;
    
    return val1 * val2;

}


//https://youtu.be/w4W2IqFCiQE?si=9drirxlHCdDxB2rZ