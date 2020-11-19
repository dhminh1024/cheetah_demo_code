let currentSidemenu = "top-stories";
const API_KEY = "1b50730b754f46618060e2353ce40222";

const getArticles = async () => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
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

const handleClickSidemenu = (category) => {
  putActiveClass(category);
};

putActiveClass(currentSidemenu);
