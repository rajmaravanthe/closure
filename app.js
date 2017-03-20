

var counter = (function () {
   var count = 0;
   return function() {
        return count += 1;
   }
})();

function addHere() {
    document.getElementById("count").innerHTML = counter();
}