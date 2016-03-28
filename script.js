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

    // swapView

    function swapView(array, arrayView, i, j) {
        swap(array, i, j);

        var a = arrayView[i].animate({ left: j * 40}).promise();
          console.log(arrayView[i].offset());
        var b = arrayView[j].animate({ left: i * 40}).promise();
          console.log(arrayView[j].offset());
      return  $.when(a, b).then(function() {
          swap(arrayView, i, j);
        })
    }

    swapView(array, arrayView, 0, 1).then(function() { alert('Done!') }, 1000);
    });


  });



// sorting dat array

// function bubbleSort(array) {
//   for ( var i = 0; i < array.length-1; i++) {
//     for ( var j = 0; j < array.length-1-i; j++) {
//       if ( array[j+1] < array[j]) {
//         var t = array[j+1];
//         array[j+1] = array[j];
//         array[j] = t;
//       }
//     }
//   }
//   return array;
// }
