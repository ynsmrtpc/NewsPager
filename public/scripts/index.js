class Requests {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const response = await fetch(this.url);
    return await response.json();
  }

}

const $ = id => document.getElementById(id);

const articleNews = $('articleNews');
const next = $('pagination-2');
const previous = $('pagination-1');
const country = $('country');
const welcomeDiv = $('welcomeDiv');
country.addEventListener('change', () => {
  const request = new Requests(`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=4299ff3e93c44dce82d5d8353f974c5b`);
  next.addEventListener('click', firstPage);
  previous.addEventListener('click', secondPage);
  welcomeDiv.style.display = 'none';

  function addAllArticlestoUI(articles) {
    let result = '';
    articles.articles.forEach((articles, index) => {
      if (index < 10) {
        articles.publishedAt = articles.publishedAt.split("T");
        const dataArticle = articles.publishedAt[0];
        let timeArticle = articles.publishedAt[1].split(":");
        timeArticle = timeArticle[0] + ":" + timeArticle[1];
        if (articles.author == null) articles.author = articles.source.name;
        if (articles.urlToImage == null) articles.urlToImage = "https://www.ispsystem.com/sites/default/files/big_0.png";
        if (articles.description == null) articles.description = "No description!";
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
            
        <div class='reliableBtn'> 
            <button style='font-size:30px;' id='unreliable' class="unreliable"> <i class='fa fa-thumbs-down'></i> </button>
            <button style='font-size:30px;' id='reliable' class="reliable"> <i class='fa fa-thumbs-up'></i></button>
        </div> 
    </article>

    `;
      }
    });
    articleNews.innerHTML = result;
  }

  function addAllArticlestoUISecondPage(articles) {
    let result = '';
    articles.articles.forEach((articles, index) => {
      if (index >= 10) {
        articles.publishedAt = articles.publishedAt.split("T");
        const dataArticle = articles.publishedAt[0];
        let timeArticle = articles.publishedAt[1].split(":");
        timeArticle = timeArticle[0] + ":" + timeArticle[1];
        if (articles.author == null) articles.author = articles.source.name;
        if (articles.urlToImage == null) articles.urlToImage = "https://www.ispsystem.com/sites/default/files/big_0.png";
        if (articles.description == null) articles.description = "No description!";
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
        <div class='reliableBtn'> 
            <button style='font-size:30px;' id='unreliable' class="unreliable"> <i class='fa fa-thumbs-down'></i> </button>
            <button style='font-size:30px;' id='reliable' class="reliable"> <i class='fa fa-thumbs-up'></i></button>
        </div> 
    </article>`;
      }
    });
    articleNews.innerHTML = result;
  }

  getAllArticles();

  function firstPage() {
    getAllArticleSecondPage();
    next.style.display = 'none';
    previous.style.display = 'block';
  }

  function secondPage() {
    window.location.reload();
    getAllArticles();
    next.style.display = 'block';
    previous.style.display = 'none';
  } // GET 


  function getAllArticles() {
    request.get().then(articles => {
      console.log(articles.articles);
      addAllArticlestoUI(articles);
    }).catch(err => console.log(err));
  }

  function getAllArticleSecondPage() {
    request.get().then(articles => {
      console.log(articles.articles);
      addAllArticlestoUISecondPage(articles);
    }).catch(err => console.log(err));
  }

  next.style.visibility = 'visible';
});