// class Request {
//     constructor(url) {
//         this.url = url
//     }
//     async get() {
//         const response = await fetch(this.url)
//         return await response.json()
//     }
// }
// const search = document.getElementById('search');
// searchValue = search.value.trim();
// const requestSearch = new Request(`https://newsapi.org/v2/everything?q=${searchValue}&from=2022-05-13&sortBy=publishedAt&apiKey=4299ff3e93c44dce82d5d8353f974c5b`);
// function getAllArticle() {
//     request.get()
//         .then(articles => {
//             console.log(articles.articles)
//         })
//         .catch(err => console.log(err))
// }
"use strict";