// creating random array

function createRandomDigit(start, end) {
  return Math.random() * (end - start) + start;
}

function createRandomArray(length, start, end) {
  var array = [];
  for ( var i = 0; i < length; i++) {
    array.push(Math.ceil(createRandomDigit(start, end)));
  }
  return array;
}

// reflect dat array to user

$(document).ready(function() {
  $('button').click(function() {
    var array = createRandomArray(10, 0, 10);
    var content = array.map(function(el) {
      return $('<span>')
        .text(el)
        .css( {
          'border':'2px solid #990066',
          'padding':'15px',
          'margin': '5px'
        });
    });
    $('#array-placeholder').html(content);
  });
});

// sorting dat array

function bubbleSort(array) {
  for ( var i = 0; i < array.length-1; i++) {
    for ( var j = 0; j < array.length-1-i; j++) {
      if ( array[j+1] < array[j]) {
        var t = array[j+1];
        array[j+1] = array[j];
        array[j] = t;
      }
    }
  }
  return array;
}
