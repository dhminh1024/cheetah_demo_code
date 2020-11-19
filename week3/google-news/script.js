let currentSidemenu = "top-stories";
const API_KEY = "1b50730b754f46618060e2353ce40222";
let newsList = [];
const urlOptions = {
  country: "us",
  category: "",
  q: "",
  page: 1,
};

const getURL = (urlOptions) => {
  let url = Object.keys(urlOptions).reduce((url, option) => {
    if (urlOptions[option]) {
      url += `${option}=${urlOptions[option]}&`;
    }
    return url;
  }, "http://newsapi.org/v2/top-headlines?");
  url += `apiKey=${API_KEY}`;
  return url;
};
// console.log(getURL(urlOptions));

const getArticles = async (addToList = false) => {
  if (!addToList) {
    urlOptions.page = 1;
  }
  const response = await fetch(getURL(urlOptions));
  const data = await response.json();
  if (!addToList) {
    newsList = data.articles;
  } else {
    newsList = [...newsList, ...data.articles];
  }
  renderArticles(newsList);
  renderSources();
  document.getElementById("counter").innerHTML = newsList.length;
};

const renderArticles = (newsList) => {
  const newsListHTML = newsList
    .map((news) => {
      return `<li class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">${news.title}</h5>
        <p>${news.content}</p>
        <span class="badge badge-info">${news.source.name}</span>
        <div>
          <a href="${news.url}" target="_blank">View Full Coverage</a>
        </div>
      </div>
      <img src="${news.urlToImage}" class="ml-3" alt="..." />
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

getArticles();

const putActiveClass = (category) => {
  document.getElementById(currentSidemenu).classList.remove("active");
  document.getElementById(category).classList.add("active");
  document.getElementById("category-title").innerHTML = category
    .split("-")
    .join(" ")
    .toUpperCase();
  currentSidemenu = category;
};

const handleClickSidemenu = async (category) => {
  putActiveClass(category);

  // Load data from the category
  if (category === "top-stories") {
    urlOptions.category = "";
  } else {
    urlOptions.category = category;
  }
  getArticles();
};

const handleSearchClick = async () => {
  try {
    const q = document.getElementById("search-input").value;
    urlOptions.q = q;
    getArticles();
  } catch (error) {
    console.log(error);
  }
};

const handleSourceClicked = (source) => {
  if (source === "all") {
    renderArticles(newsList);
  } else {
    let filteredNews = newsList.filter((news) => news.source.name === source);
    renderArticles(filteredNews);
  }
};

const handleLoadMoreClick = () => {
  urlOptions.page += 1;
  getArticles(true);
};

putActiveClass(currentSidemenu);
