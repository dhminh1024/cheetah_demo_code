let currentSidemenu = "top-stories";

const putActiveClass = (category) => {
  document.getElementById(currentSidemenu).classList.remove("active");
  document.getElementById(category).classList.add("active");
  currentSidemenu = category;
};

const handleClickSidemenu = (category) => {
  putActiveClass(category);
};

putActiveClass(currentSidemenu);
