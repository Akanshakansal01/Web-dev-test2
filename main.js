themeColour = document.querySelectorAll('[name="theme"]');
      themeColour.forEach((theme) => {
        theme.addEventListener("click", () => store(theme));
      });
      function store(theme) {
        localStorage.setItem("theme", theme.id);
      }
      function apply() {
        storedtheme = localStorage.getItem("theme");
        themeColour.forEach((theme) => {
          if (theme.id === storedtheme) {
            theme.checked = true;
          }
        });
      }
      document.onload = apply();
      var items=[];
      if(localStorage.getItem('items')!=null){
        // console.log(localStorage.getItem('items'));
        items=JSON.parse(localStorage.getItem('items'));
        items.forEach(item=>{
          display(item);
        });
      }
      form=document.getElementById('addForm');
      form.addEventListener('submit',additem);
      document.getElementById('items').addEventListener('click',remove);
      function remove(e){
        el=e.target;
        if(el.classList.contains('delete')){
          p=el.parentElement;
          this.removeChild(p);
          v=p.innerText.substring(0,p.innerText.length-1);
          items=items.filter(item=>item!=v);
          localStorage.setItem('items',JSON.stringify(items));
        }
      }
      
      function search(){
        filter=document.getElementById('filter').value.toUpperCase();
        li=document.getElementsByTagName('li');
        Array.from(li).forEach((li)=>{
            text=li.innerText.substring(0,li.innerText.length-1);
            if(text.toUpperCase().indexOf(filter)==-1){
              li.style.display='none';
            }
            else{
              li.style.display="";
            }
        });
      }