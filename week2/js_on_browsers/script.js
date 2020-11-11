function sectionOne() {
  var btnChangeContent = document.getElementById("s1-btn-content");
  btnChangeContent.addEventListener("click", function () {
    document.getElementById("s1-text").innerHTML =
      "by adding Event Listener to the button.";
  });

  var btnChangeAtrribute = document.getElementById("s1-btn-attribute");
  btnChangeAtrribute.addEventListener("click", function () {
    // access to the <i> tag
    var icon = document.getElementById("s1-icon");
    console.log(icon.classList);
    // toggle the className
    if (icon.className === "far fa-heart") {
      icon.className = "fas fa-heart";
    } else {
      icon.className = "far fa-heart";
    }
  });
}

function hideSectionOne() {
  // Select all the buttons in section one
  var buttons = document.querySelectorAll("#s1 .btn");
  console.log(buttons);
  // Add .invisible to the buttons className
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("invisible");
    // buttons[i].style.display = "none";
  }
}
sectionOne();

// Section 2

function sectionTwo() {
  document
    .getElementById("s2-input-name")
    .addEventListener("keyup", function (event) {
      console.log(event.key);
      var input = event.target;
      var span = input.parentNode.childNodes[3];
      var firstName = input.value.split(" ")[0];
      span.innerHTML = "First Name:" + firstName;
    });

  var maxLength = 10;

  document
    .getElementById("s2-input-email")
    .addEventListener("keyup", function (event) {
      var input = event.target;
      var span = input.parentNode.childNodes[3];

      if (event.key === " ") {
        span.innerHTML = "Space is invalid";
        span.style.color = "red";
        input.value = input.value.trim();
      }

      if (input.value.length <= maxLength) {
        span.style.color = "#2ecc71";
        span.innerHTML = `${maxLength - input.value.length} characters left`;
      } else {
        input.value = input.value.slice(0, maxLength);
      }
    });
}

sectionTwo();
