

var counter = (function () {
   var count = 0;
   return function() {
        return count += 1; // adding one by one
   }
})(); //  self executing method

function addHere() {
    document.getElementById("count").innerHTML = counter(); // call method returns the inner ll execute self
}
