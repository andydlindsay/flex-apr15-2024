console.log('inside food-item.js');

// const $div = $('<div>'); // <div></div>
// $div.text('hello'); // <div>hello</div>
// $div.addClass('content'); // <div class="content">hello</div>

$(document).ready(() => {

  const $section = $('#food-item-container');

  const createFoodItem = (foodItemData) => {
    const $foodItem = $(`
      <div class="food-item">
        <header>
          <h2>Name: ${foodItemData.name}</h2>
          <h3>ID: ${foodItemData.id}</h3>
        </header>
        <p>${foodItemData.tagline}</p>
        <hr/>
        <footer>
          <h3>Calories: ${foodItemData.calories}</h3>
          <h3>Price: $${foodItemData.price}</h3>
        </footer>
      </div>
    `);

    return $foodItem;
  };

  const renderArrayOfFoodItems = (arr) => {
    for (const foodItemData of arr) {
      const $foodItem = createFoodItem(foodItemData);
      $section.prepend($foodItem);
    }
  };

  const loadFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (response) => {
        console.log(response);
        renderArrayOfFoodItems(response);
      }
    });
  };

  loadFoodItems();

  // grab the form element
  const $form = $('#new-food-item-form');

  // add a submit handler
  $form.on('submit', (event) => {
    // tell the HTML not to submit the form
    event.preventDefault();

    // grab the data from the form as a url-encoded string
    const formData = $form.serialize();

    // POST the data to the server
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: formData,
      success: () => {
        console.log('food item POSTed successfully');

        // make a GET request for all food-items (including the new one)
        loadFoodItems();
      }
    });
    
  });

});
