const factorial = function(val)
{
    if(val===0 || val===1)
        return 1;

       return val * factorial(val-1);
}


const val = prompt("Please Enter the values : ");
console.log(factorial(Number(val)))
