$(document).ready(function() {

// creating random array

  function createRandomNumber(start, end) {
    return Math.random() * (end - start) + start;
  }

  function createRandomArray(length, start, end) {
    var array = [];
    for ( var i = 0; i < length; i++) {
      array.push(Math.ceil(createRandomNumber(start, end)));
    }
    return array;
  }

// swap

  function swap(array, i1, i2) {
      var a = array[i1];
      array[i1] = array[i2];
      array[i2] = a;
  }

// swapView

  function swapView(array, arrayView, i, j) {
    swap(array, i, j);

    var a = arrayView[i].animate({ left: j * 40}).promise();

    var b = arrayView[j].animate({ left: i * 40}).promise();

    return $.when(a, b).then(function() {
      swap(arrayView, i, j);
    });
  }

// render array

  $('.first').click(function() {

    var array = createRandomArray(10, 0, 10);
    var arrayView = array.map(function(el, index) {
      return $('<span>')
        .text(el)
        .addClass('style-each-el')
        .css({ left: index * 40 });
    });
    $('#array-placeholder').html(arrayView);

    var nextStep = function(i, j) {
      function next_i_j() {
        if ( j <= array.length-2-i) { j += 1 }
        else {
           j = 0; i +=1
        }
      }

      if ( i >= array.length) { return; }
      
      if ( array[j+1] < array[j]) {
        swapView(array, arrayView, j+1, j).then(function() {
          next_i_j(); nextStep(i, j)
        });
      } else {
        next_i_j(); nextStep(i, j);
      }
    }
    nextStep(0, 0);
  });
});
