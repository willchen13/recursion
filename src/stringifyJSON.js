// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

  var arrVals = [];
  var objVals = [];

  //stringifiable objects
  if (typeof obj ==='number'){
    return obj.toString();
  }

  if(typeof obj ==='null'){
    return obj.toString();
  }

  if(typeof obj==='boolean'){
    return obj.toString();
  }

  if(typeof obj==='string'){
    return `"${obj}"`;
  }

  if(obj===null){
    return String(obj);
  }


  //unstringifiable values: function or undefined values

  if(typeof obj==='function' || typeof obj==='undefined'){
    return undefined;
  }

  //Arrays
  if (Array.isArray(obj)) {
    obj.forEach(function (element) {
      arrVals.push(stringifyJSON(element));
    })
    return '[' + arrVals + ']';
  }

  // object handling
  if (typeof(obj) === 'object') {
    for (key in obj) {
    	if(typeof(obj[key]) !== 'function' && typeof(obj[key]) !== 'undefined') {
          objVals.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objVals + '}'
  }

};
