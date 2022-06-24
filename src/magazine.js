const $ = (id) => document.getElementById(id);
const articleNews = $('articleNews');

async function getData() {

    const url = `https://newsapi.org/v2/everything?q=magazine&from=2022-06-20&sortBy=popularity&apiKey=4299ff3e93c44dce82d5d8353f974c5b`;
    const response = await fetch(url);
    const articles = await response.json();
    let result = '';
    
    articles.articles.forEach((articles) => {
        articles.publishedAt = articles.publishedAt.split("T");
        const dataArticle = articles.publishedAt[0];
        let timeArticle = articles.publishedAt[1].split(":");
        timeArticle = timeArticle[0] + ":" + timeArticle[1]
        if (articles.author == null) articles.author = articles.source.name;
        if (articles.urlToImage == null) articles.urlToImage = "https://storage.googleapis.com/newspager/newspager_no_picture_news.png";
        if (articles.description == null) articles.description = "No description!"
        
        result += `
        <article class="brick entry format-standard">

        <div class="entry-thumb">
            <a target='_blank'  href="${articles.url}" class="thumb-link">
                <img  src="${articles.urlToImage}" alt="news-image">
            </a>
        </div>

        <div class="entry-text">
            <div class="entry-header">
            <div class="entry-meta">
            <span class="cat-links">
                <a href="#">${articles.author}</a>
            </span>
        </div>
                <h1 class="entry-title"><a target='_blank' href="${articles.url}">${articles.title}</a></h1>

            <div class="entry-excerpt">
                <p> ${articles.description} </p>
            </div>
            <div style="float:right">
                <small>${timeArticle}, ${dataArticle}</small>
            </div>
        </article>`

        articleNews.innerHTML = result;
        })
}

getData();