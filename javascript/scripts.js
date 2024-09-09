$(document).ready(function() {
  // 1. Adding a new item to the list of items
  $('#addButton').click(function() {
      let inputValue = $('#input').val();
      if (inputValue === '') {
          alert("You must write something!");
      } else {
          let li = $('<li>').text(inputValue);
          let crossOutButton = $('<button>').text('X').addClass('deleteButton');
          
          li.append(crossOutButton);
          $('#list').append(li);
          $('#input').val(''); // Clear the input field
      }
  });

  // 2. Crossing out an item from the list of items
  $('#list').on('dblclick', 'li', function() {
      $(this).toggleClass('strike');
  });

  // 3. Adding the delete button "X" and functionality
  $('#list').on('click', '.deleteButton', function() {
      $(this).parent().remove();
  });

  // 4. Reordering the items
  $('#list').sortable();
});