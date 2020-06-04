
setTimeout(() => {
    var a =  document.getElementById('form-show');
    a.classList.add("show");
    body.classList.add("bb");
}, 1000);

function hide(){
  var a =  document.getElementById('form-show');
 a.classList.add("hide")
 body.classList.remove("bb");
 
}
function problem(){
    alert('Please Login First');
}