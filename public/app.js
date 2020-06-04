
setTimeout(() => {
    var a =  document.getElementById('form-show');
    a.classList.add("show");
}, 1000);

function hide(){
  var a =  document.getElementById('form-show');
 a.classList.add("hide"); 
}
function hides(){
    var b =  document.getElementById('search-b');  
   b.classList.add("hide") 
 b.classList.remove("show");
  }

  function shows(){
    var b =  document.getElementById('search-b');  
   b.classList.add("show") 
 b.classList.remove("hide");
   
  }

function problem(){
    alert('Please Login First');
}