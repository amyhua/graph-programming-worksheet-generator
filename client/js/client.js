console.log('Hello! I am client.js inside client/js/...');
console.log('...This comment is on line 2 of client.js');

var tableWidth = 150;

var exerciseHTML = function(dimension) {
  var width = Math.floor(tableWidth / dimension);
  var height = width;
  var trs = '';
  var x = 0;
  var isFilled = true;
  for (var i = 0; i < dimension; i++) {
    x++;
    trs += '<tr>';
    // add 3 columns per row
    for (var j = 0; j < dimension; j++) {
      x++;
      // td
      isFilled = !isFilled;
      // || Math.round(Math.random());
      trs += `<td class="cell ${isFilled ? 'filled' : ''}" style="width:${width}px;height:${height}px;"><div class="filling" /></td>\n`;
    }
    trs += "</tr>";
  }
  return `
  <div class="exercise">
    <span class="close-btn">Remove</span>
    <table style="height:${tableWidth}px;width:${tableWidth}px;">
      ${trs}
    </table>
  </div>`;
};

var $exercises = $('#exercises');

$('#worksheet-form').on('submit', function(event) {
  event.preventDefault();
  var qty = $('#qty').val();
  var dim = $('#dim').val();
  $exercises.children('.exercise-row').last().append(exerciseHTML(dim));
});

$('#create-new-row-btn').on('click', function(event) {
  event.preventDefault();
  $exercises.append('<div class="exercise-row"></div>');
});

$(document).on('click', '.close-btn', function(event) {
  $(this).parent('.exercise').remove();
});

$('#print-btn img').on('click', function(event) {
  event.preventDefault();
  window.print();
});

var $checkbox = $('#include-instructions-checkbox');
$checkbox.on('change', function() {
  $('body').toggleClass('include-instructions');
});

console.log('exerciseHTML', exerciseHTML(3));