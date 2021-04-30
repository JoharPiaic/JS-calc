function getNumber(num) {
    console.log(num)
    var output = document.getElementById("output");
    output.value += num;
}

function clearOutput() {
    var output = document.getElementById("output");
    output.value = ""    
}
 
function getResult() {
    var output = document.getElementById("output");
  //  console.log (output.value)
        output.value = eval(output.value)
}