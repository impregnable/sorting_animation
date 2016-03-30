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

// swap two elements in array

  function swap(array, i1, i2) {
      var a = array[i1];
      array[i1] = array[i2];
      array[i2] = a;
  }

// swap two elements using jquery.animate

  function swapView(array, arrayView, i, j) {
    swap(array, i, j);

    var a1 = arrayView[i].animate({ top: 60}, 350, 'easeInOutCubic').promise();
    var a2 = arrayView[i].animate({ left: j * 40}, 350, 'easeInOutCubic').promise();
    var a3 = arrayView[i].animate({ top: 0}, 350, 'easeInOutCubic').promise();
    var b1 = arrayView[j].animate({ top: 100}, 350, 'easeInOutCubic').promise();
    var b2 = arrayView[j].animate({ left: i * 40}, 350, 'easeInOutCubic').promise();
    var b3 = arrayView[j].animate({ top: 0}, 350, 'easeInOutCubic').promise();

    return $.when(a1, b1).then(function() {
      return $.when(a2, b2)}).then(function() {
        return $.when(a3, b3)}).then(function() {
          swap(arrayView, i, j);
    });
  }

// render array

  var array;
  var arrayView;
  $('.first').click(function() {

     array = createRandomArray(10, 0, 10);
     arrayView = array.map(function(el, index) {
      return $('<span>')
        .text(el)
        .addClass('style-each-el')
        .css({ left: index * 40 });
    });
    $('#array-placeholder').html(arrayView);
  });

// sort array

  $('.second').click(function() {

// checking array for existence

    if ( array == null) {
      alert("Sorry, you've forgotten to create collection");
    }

    var nextStep = function(i, j) {
      function next_i_j() {
        if ( j <= array.length-2-i) { j += 1 }
        else {
           j = 0; i +=1
        }
      }
// checking recursion for the end

      if ( i >= array.length) { return; }

// swap elements of the array based on conditions

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
