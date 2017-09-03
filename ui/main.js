console.log('Loaded!');

var element=document.getElementById('mmain-text');
element.innerHTML='Click me';

var img=document.getElementById('madi');
var marginLeft= 0;
function marginRight(){
    marginLeft= marginLeft + 10;
    img.style.marginTop= marginLeft + 'px';

}

img.onclick = function() {

   var time= setInterval(marginRight, 100);
  
};