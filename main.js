themeColour = document.querySelectorAll('[name="theme"]');
themeColour.forEach((theme) => {
  theme.addEventListener("click", () =>
    localStorage.setItem("theme", theme.id)
  );
});

function store() {
  store = localStorage.getItem("theme");
  themeColour.forEach((theme) => {
    if (theme.id === store) {
      theme.checked = true;
    }
  });
}
document.onload = store();
document.getElementById("start").addEventListener("click", display);

function display() {
  var visit = document.getElementById("search").value;
  req(visit);
}
var data;
function req(a) {
  const url = "https://api.tvmaze.com/search/shows?q=";
  const p = new XMLHttpRequest();
  p.onload = function () {
    var c = document.getElementById("aa");
    data = JSON.parse(this.response);
    data.forEach((d) => {
      console.log(d.show.image.original);
      var im = d.show.image.original;
      var div = document.createElement("div");
      // c.appendChild(div);
      div.className = "mov";
      div.innerHTML = `<img src="${im}" alt="">`;
      c.appendChild(div);
    });
  };
  p.onerror = function () {
    console.log("error");
  };
  p.open("GET", url + a);
  p.send();
}
