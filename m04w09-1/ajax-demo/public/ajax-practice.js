console.log('inside the ajax-practice file');

$.ajax({
  method: 'GET',
  url: '/food-items',
  success: (response) => {
    console.log(response);
  },
  error: () => {}
});
