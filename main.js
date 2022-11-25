themeColour = document.querySelectorAll('[name="theme"]');
      themeColour.forEach((theme) => {
        theme.addEventListener("click",()=> localStorage.setItem("theme",theme.id));
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
document.getElementById('start').addEventListener("click",display);

function display(){
    var visit=document.getElementById('search').value;
    req(visit);
}
var data;
function req(api){
    const url="https://api.tvmaze.com/search/shows?q=";
    const api=new XMLHttpRequest;
    api.onload=function(){
        data=this.response;
        // data.forEach((d)=>{
        //     console.log(data);
        // })
        console.log(data);
        var ch=document.getElementById('m');
        var div=document.createElement('div');
        ch.endChild(div);
        div.className='movies';
        
    }
    api.onerror=function(){
        console.log('error');
    }
    api.open("GET",url+api);
    api.send();
    
}      