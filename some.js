module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function(values){
    return values > 10;
  });
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function(data){
    return data.length > 10;
  });
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(function(data){
    return data.some(function(element){
      return element === true;
    });
  });
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  var substring = 'Lost';
  return input.some(function(data){
    return data.indexOf(substring) !== -1; 
  });
}
