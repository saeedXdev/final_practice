const factorial = function(val)
{
    if(val===0 || val===1)
        return 1;

<<<<<<< HEAD
       
=======
    return val-1 * factorial(val-1);    
>>>>>>> master
}


const val = prompt("Please Enter the values : ");
console.log(factorial(Number(val)))
