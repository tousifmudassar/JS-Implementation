function calculateSin(x)
  {
    if(arguments.length<1)
      {
        console.log("you passes incorrect number of argument");
      }
    if(typeof x=='undefined')
      {
        console.log("Argument is undefined and argument is not a nember");
      }
    if(isNaN(x))
      {
        console.log("argument is not a number");
      }
    else
      {
        console.log(Math.sin(x));
      }
  }
calculateSin(90);