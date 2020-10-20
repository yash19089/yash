

function socksForSale(socks)
                        
{    
    socks.sort(function(a, b)                      //Variable a and b passing in funtion
    {                                               //Return value a and b
    return a - b;}                    
    );    var counter = 0;    
    for(var i=0; i<socks.length-1; i++)             // Loop run for socks.length-1
    {
    if(socks[i] === socks[i+1])                     // If condition apply to comparision
    {
        counter++;
    }
}    return counter;                                // Return value counter
}
