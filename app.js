$(function () {
  //EVENT
  $('#movie-form').on('submit', function (evt) {
    evt.preventDefault();

    let title = $('#title').val();
    let rating = $('#rating').val();
    let movieData = { title, rating };

    //create HTML structure with data entered
    const htmlToAdd = createMovieHTMLData(movieData);

    $('#movie-list').append(htmlToAdd);

    $('#movie-form').trigger('reset');
  });

  //EVENT

  //THIS WILL REMOVE THE DATA WHEN YOU ALSO CLICK THE DATA ITSELF

  //   $('tbody').on('click', 'tr', function () {
  //     $(this).remove();
  //   });

  //DELETES WHEN YOU CLICK THE BUTTON
  $('tbody').on('click', '.delete', function (evt) {
    //removes closest parent tr according to the clicked target
    $(evt.target).closest('tr').remove();
  });
});

//create HTML structure with data entered
function createMovieHTMLData(obj) {
  return `
      <tr>
      
        <td>${obj.title}</td>
        <td>${obj.rating}</td>
        <td>
          <button class="delete">
            Delete
          </button>
        </td>
      <tr>`;
}
