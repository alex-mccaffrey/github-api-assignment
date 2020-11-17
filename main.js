'use strict';

const apiKey = "c0a50e0cdef7e03d8ef1144a8b22b396c0b4f94b";

const searchURL = 'https://api.github.com/users/';

function getRepos() {
    const user = $('#js-user-handle').val();
    const url = searchURL + user + '/repos';

  console.log(url);

fetch(url)
.then(response => response.json())
.then(responseJson => displayResults(responseJson))
//.catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  for (let i = 0; i < responseJson.value.length; i++){
    $('#results-list').append(
      `<li><h2><a href="${responseJson.value[i].html-url}">${responseJson.value[i].name}</a></h3>
      </li>`
    )};

  $('#results').removeClass('hidden');
};


function submitForm() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('submitting')
    getRepos();
  });
}

$(submitForm);