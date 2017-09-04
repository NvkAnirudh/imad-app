var button = document.getElementById('counter');
button.onclick= function() {
    
    var request = new XMLHttpReqquest();
    
    request.onreadystatechange= function() {
        if(request.readyState=== XMLHttpRequest.DONE) {
            if(request.status=== 200) {
                var counter = request.reaponseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
     
}