var button = document.getElementById('counter');
button.onclick= function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange= function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://nutikrish4.imad.hasura-app.io/counter', true);
    request.send(null);
     
};

var submitName = document.getElementById('submit_btn');
submitName.onclick= function() {
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    list ='';
    for(i=0;i<names. length;i++){
        list += '<li>' + names[i] + '</li>';
        }
    var ul= getElementById('ul_id');
    ul.innerHTML= list;
};