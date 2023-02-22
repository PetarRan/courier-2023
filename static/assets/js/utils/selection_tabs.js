// Get all the card elements
var cardElements = document.querySelectorAll('.card.mb-3');

// Add a click event listener to each card element
cardElements.forEach(function(cardElement) {
  cardElement.addEventListener('click', function() {
    // Remove the "selected" class from all card elements
    cardElements.forEach(function(card) {
      card.classList.remove('selected-tab');
    });
    
    // Add the "selected" class to the clicked card element
    cardElement.classList.add('selected-tab');
  });
});
