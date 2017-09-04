
var submitName = document.getElementById('submit_btn');
submitName.onclick= function() {
    
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange= function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var names = request.responseText;
                names=JSON.parse(names);
                list ='';
                for(i=0;i<names. length;i++){
                    list += '<li>' + names[i] + '</li>';
                    }
                var ul= document.getElementById('ul_id');
                ul.innerHTML= list;
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name= nameInput.value;
    request.open('GET', 'http://nutikrish4.imad.hasura-app.io/', true);
    request.send(null);
     
};


   