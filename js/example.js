function fetchData() {
  fetch("https://api.genius.com/songs/378195").then(response => {
    console.log(response);
  });
}

fetchData()