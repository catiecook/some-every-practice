module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function (values){
    return values % 2 === 0;
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  var datatype = typeof input[0];
  return input.every(function(data){
    return typeof data === datatype;
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function(data){
    return data.every(function(element){
      return element > 0 && Array.isArray(data);
    });
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

var vowel = function(input){
	var vowels = [];
  	for (var i = 0; i < input.length; i++) {
    	for (var j = 0; j < input[i].length; j++) {
    		if(/[aeiou]/.test(input[i][j])){
    			vowels.push(input[i][j]);
    		}
    	}
  	}
	for (var k = 1; k < vowels.length; k++){
		if(vowels[k] !== vowels[0])
		return false;
	}
	return true;
};

function allSameVowels (input) {
  return input.every(function(data){
    return typeof data === 'string' && vowel(data);
  });
}
