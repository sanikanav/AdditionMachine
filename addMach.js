
var count = 0;
var sum = 0;

function getval(x){
 count = count + 1;
 sum = sum + x;
 print();
}

function print(){
  document.getElementById("output").innerHTML = "Number Count: " + count +  " <br> Sum: " + sum;
}


function funclear(){
  count = 0;
  sum = 0;
  document.getElementById("output").innerHTML = "";

}
