var pointsArray = document.getElementsByClassName('point')


var forEach = function(array, callBack){
 for(var i = 0; i < pointsArray.length; i++){
   callBack(array[i]);
 }
}

var animate = function(thing){
  console.log("animating" + thing);
}

//forEach(animate);
