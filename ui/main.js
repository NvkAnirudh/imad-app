console.log('Loaded!');

var element=document.getElementById('mmain-text');
element.innerHTML='Changed content';

var img=document.getElementById('madi');
var marginLeft= 0;
function marginRight(){
    marginLeft= marginLeft - 10;
    img.style.marginLeft= marginLeft + 'px';

}

img.onclick = function() {

   var time= setInterval(marginRight, 100);
  
};