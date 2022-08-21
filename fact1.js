function factorial(n){
    if (n == 0 || n == 1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
   
}

function f1(){
    let n = document.getElementById("number").value;
    fact = factorial(n);
    document.getElementById("ans").innerHTML = "The factorial of " + n + " is " + fact

}