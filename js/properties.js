// change innerText of contact option on mouseover and mouseout
emailMe.addEventListener("mouseover", () => {
  emailMe.innerText = "Email Us";
  emailMe.classList.remove("text-white");
  emailMe.classList.add("text-primary");
});
emailMe.addEventListener("mouseout", () => {
  emailMe.innerText = "Contact Us";
  emailMe.classList.add("text-white");
  emailMe.classList.remove("text-primary");
});

// redirect for search from properties.html
function searchProperties() {
  location.reload("");
}
// redirect for search from index.html
function searchDestinations() {
  window.open("./templates/properties.html", "_blank").focus();
}

// redirect to property details page properties.html
function details() {
  window.open("./propertydetails.html", "_blank").focus();
}
// redirect to property details page from index.html
function propertyDetails() {
  window.open("./templates/propertydetails.html", "_blank").focus();
}

// get GeoLocation
var lat = document.getElementById("lat");
var lng = document.getElementById("lng");
let findBtn = document.getElementById("find");
let spinner = document.getElementById("spinner");

function getLocation() {
  findBtn.disabled = true;
  spinner.style.display = "inline-block";
  let nearme = document.getElementById("nearme");
  if (nearme.checked == true) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  } else {
    removePosition();
  }
}
function showPosition(position) {
  lat.value = position.coords.latitude;
  lng.value = position.coords.longitude;
  findBtn.disabled = false;
  spinner.style.display = "none";
}
function removePosition() {
  lat.value = 0;
  lng.value = 0;
  findBtn.disabled = false;
  spinner.style.display = "none";
}

// rating > check radio button
var ratingValue = document.querySelector("#ratings");
ratingValue.addEventListener("change", (event) => {
  document.getElementById("rating").value = event.target.value;
});

function toggleFilterMenu() {
  let filterMenu = document.getElementById("filters");
  if (filterMenu.style.display == "none") {
    filterMenu.style.display = "block";
  } else {
    filterMenu.style.display = "none";
  }
}

function displayContactNumber() {}
