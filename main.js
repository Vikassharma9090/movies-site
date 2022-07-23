// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a7820b69a8msh7fa00a4da51b1fap1f68bcjsn9516d537ea02',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
// 	.then(data => {
//         const list = data.d;

//         list.map((item)=>{
//             const name = item.l;
//             const poster = item.i.imageUrl;
//             const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
//             document.querySelector('.movies').innerHTML +=movie;
//         })
//     })
// 	.catch(err => console.error(err));

// 3rd Prctice

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a7820b69a8msh7fa00a4da51b1fap1f68bcjsn9516d537ea02",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=indian%20",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const list = data.d;
    list.map((item) => {
      // console.log(item)
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
      document.querySelector(".movies").innerHTML += movie;
    });
  })
  .catch((err) => console.error(err));
