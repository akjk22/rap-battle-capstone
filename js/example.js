// function fetchData() {
//   fetch("https://mourits-lyrics.p.rapidapi.com/").then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   });
// }

// fetchData()

fetch("https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%2520jackson&song=bad", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
		"x-rapidapi-key": "324b68028emsh2bdaa9e9f17a4efp16daedjsn355e4f3cbef3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});