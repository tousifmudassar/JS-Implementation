function clicktoChange(){
    document.getElementById("demo").innerHTML="Hello Javascript"+"<br/>";
    document.getElementById("demo1").style.fontSize="35px";
    document.getElementById("demo1").style.color="green";
    document.getElementById("demo2").style.display="none";
    document.getElementById("demo3").style.display=
    "block";
    document.getElementById("demo4").innerHTML=
    3+5;
    document.getElementById("demo4").innerHTML=
    "Hello Dolly";
    var x,y;
    x=10;
    y=x*5;
    document.getElementById("demo4").innerHTML= y;
}

function OnclickChange(){
    document.write(7+5);
}
function myFunction(a,b){
    return a*b;
}
document.getElementById("myFunc").innerHTML=myFunction(6,3);

function convertToCelsius(fahrenheit){
    return Celsius= (5/9) * (fahrenheit-32);
    
}
document.getElementById("F2C").innerHTML="The Temperature is "+convertToCelsius(77)+" Celsius";


