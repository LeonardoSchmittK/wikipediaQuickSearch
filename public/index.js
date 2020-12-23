const textToSearch = window.document.querySelector(".search-text");
function search() {
  window.location.assign(`https://en.wikipedia.org/wiki/${textToSearch.value}`);
}

function checkKey(event) {
  if (event.keyCode === 13) search();
}
