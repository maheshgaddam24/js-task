function factorial(n){
    var i;
    let fact =1;
    for (i=n; i >= 1; i--){
        fact = fact * i;
    }
    return fact
   
}

function f1(){
    let n = document.getElementById("number").value;
    fact = factorial(n);
    document.getElementById("ans").innerHTML = "The factorial of " + n + " is " + fact

}