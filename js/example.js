// function fetchData() {
//   fetch("https://mourits-lyrics.p.rapidapi.com/").then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   });
// }

// fetchData()

fetch("https://canarado-lyrics.p.rapidapi.com/lyrics/zenith%2520denzel%2520curry", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
		"x-rapidapi-key": "324b68028emsh2bdaa9e9f17a4efp16daedjsn355e4f3cbef3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});