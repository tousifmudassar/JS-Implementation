function doThis(num){
  return num*num;
  
}

function doThat(a,b){
  return a+b;
}


var input;
if (input === undefined) {
  var temp=doThis(9);
  
} else {
  var temp=doThat(6,10);
}

console.log(temp);