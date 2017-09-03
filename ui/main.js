console.log('Loaded!');

var element=document.getElementById('mmain-text');
element.innerHTML='Changed content';

var img=document.getElementById('madi');
img.onclick = function() {
    img.style.marginleft= '100px';
};