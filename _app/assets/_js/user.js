// Custom user scripts
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", function(){
  var cubes = document.querySelectorAll(".cube-perspective .cube");
  Array.prototype.forEach.call(cubes, function(el, i){
    setTimeout(function() {
      el.className += " hover";
    }, getRandomArbitrary(1, 5) * 1000);
  });
});
