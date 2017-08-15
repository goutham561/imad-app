var button=document.getElementById('counter');
button.onclick=function() {
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
            var counter = request.responseText;
            var span =document.getElementById('count');
            span.innerHTML = counter.toString();
          }
      }
    };
   //make the request
   request.open('GET','http://adunurigouthamkumar.imad.hasura-app.io/counter',true);
   request.send(null);
};

//submit name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++) {
                list += '<li>'+names[i]+'</li>';
            }
var ul=document.getElementById('namelist');
ul.innerHTML = list;
          }
      }
    };
    
   //make the request
   var nameInput=document.getElementById('name');
   var name=nameInput.value;
   request.open('GET','http://adunurigouthamkumar.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);
};