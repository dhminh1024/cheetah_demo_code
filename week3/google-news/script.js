const API_KEY = "1b50730b754f46618060e2353ce40222";
// const URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

let newsList = [];
let endpoint = "top-headlines";
const urlOptions = {
  country: "us",
  category: "",
  page: 1,
  q: "",
};

let currentSideMenu = "top-stories";

const putActiveClass = (category) => {
  document.getElementById(currentSideMenu).classList.remove("active");
  document.getElementById(category).classList.add("active");
  document.getElementById("category-title").innerHTML = category
    .split("-")
    .join(" ")
    .toUpperCase();
  currentSideMenu = category;
};

const getURL = (urlOptions) => {
  let url = Object.keys(urlOptions).reduce((url, option) => {
    if (urlOptions[option]) {
      url += `${option}=${urlOptions[option]}&`;
    }
    return url;
  }, `http://newsapi.org/v2/${endpoint}?`);
  url += `apiKey=${API_KEY}`;
  return url;
};

const getArticles = async (addToList = false) => {
  console.log({ urlOptions, addToList });
  if (!addToList) {
    urlOptions.page = 1;
    newsList = [];
  }

  document.getElementById("news-list").innerHTML = "Loading..";
  const response = await fetch(getURL(urlOptions));
  const data = await response.json();
  console.log(data);
  newsList = [...newsList, ...data.articles];

  renderArticles(newsList);
  renderSources();
  document.getElementById("counter").innerHTML = newsList.length;
};

const renderArticles = (newsList) => {
  const newsListHTML = newsList
    .map((news) => {
      return `<li class="media my-4">
      <div class="media-body">
        <h4 class="mt-0 mb-1">${news.title}</h4>
        <p>${news.content}</p>
        <span class="badge badge-info">${news.source.name}</span> -
        <span class="published-at">${moment(news.publishedAt).fromNow()}</span>
        <div class="mt-4">
          <img class="view-more-ico" src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w32-rw" alt="icon view more"/>
          <a href="${news.url}">View Full Coverage</a>
        </div>
      </div>
      <img class="ml-3" src="${news.urlToImage}" alt="Image article" />
    </li>`;
    })
    .join("");

  document.getElementById("news-list").innerHTML = newsListHTML;
};

const renderSources = () => {
  const sourceCounter = {};

  newsList.forEach((item) => {
    if (!(item.source.name in sourceCounter)) {
      sourceCounter[item.source.name] = 1;
    } else {
      sourceCounter[item.source.name] += 1;
    }
  });

  const sourceListHTML = Object.keys(sourceCounter)
    .map(
      (source) =>
        `<button type="button" class="btn btn-outline-dark m-1" onclick='handleSourceClicked("${source}")'>
          ${source} <span class="badge badge-info">${sourceCounter[source]}</span>
         </button>`
    )
    .join("");

  document.getElementById("source-list").innerHTML = sourceListHTML;
};

let handleSourceClicked = (source) => {
  if (source === "all") {
    renderArticles(newsList);
  } else {
    let filteredNews = newsList.filter((news) => news.source.name === source);
    renderArticles(filteredNews);
  }
};

const handleClickSideMenu = (category) => {
  putActiveClass(category);
  if (category === "top-stories") {
    urlOptions.category = "";
  } else {
    urlOptions.category = category;
  }
  getArticles();
};

const handleLoadMoreClick = () => {
  urlOptions.page += 1;
  getArticles(true);
};

const handleSearchClick = () => {
  let query = document.getElementById("search-input").value;
  urlOptions.q = query;
  console.log(urlOptions);
  getArticles();
};

// Get articles for the first time
putActiveClass(currentSideMenu);
getArticles();
